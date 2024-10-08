export async function POST(req: Request, res: Response) {
    if (req.method === 'POST') {
      const body = await req.json()
      const { username, phone }: any = body;
      const botToken = process.env.TOKEN;
      const chatId = process.env.CHAT_ID;
  
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      const text = `
         📩 Вам новая заявка:
         <b>Имя:</b> ${username}
         <b>Телефон:</b> ${phone}
           `;
  
        const params = {
            chat_id: chatId,
            text: text,
            parse_mode: 'HTML',
        }

      try {
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
          });

          if (response.ok) {
            const responseData = await response.json();
            return Response.json({ message: "Сообщение успешно создано", responseData },
                { status: 200 }
              );
        } else {
            throw new Error('Failed to send message');
        }

    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return Response.json({success: false, message: "Error sending message."},
            { status: 500 }
        );
          
        
    }
} else {
    return Response.json({success: false, message: 'Method not allowed' },
        { status: 405 }
)}
}