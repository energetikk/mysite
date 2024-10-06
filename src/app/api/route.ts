import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

export async function POST (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { username, phone } = req.body;
  
      // Replace with your actual bot token and chat ID
      const botToken = process.env.TOKEN;
      const chatId = process.env.CHAT_ID;
  
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      const message = `
        User name: ${username} \n
        Phone: ${phone} \n
      `;
  
      try {
        // Send the message via the Telegram Bot API
        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        });
  
        const responseData = await response.json();
  
        if (responseData.ok) {
          return res.status(200).json({ success: true, message: 'Message sent successfully!' });
        } else {
          return res.status(500).json({ success: false, message: 'Failed to send message.' });
        }
      } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return res.status(500).json({ success: false, message: 'Error sending message.' });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }