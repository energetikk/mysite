// 'use client'

// import { useState } from "react";

// export function Form() {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         phone: '',
//         message: '',
//         // Добавьте другие поля формы, если необходимо
//       });
    
//       const handleChange = (e: any) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//           ...prevData,
//           [name]: value
//         }));
//       };
//     // const botToken = process.env.NEXT_PUBLIC_TOKEN
//     const botToken = process.env.TOKEN
//     console.log(botToken)
//     const chat_id = process.env.CHAT_ID;
//     function sendDataToTelegram(formData: any) {
//         // const botToken = '6845698347:AAFsSq0EAlU42lEапfue7R8RtVtT397N9BQ'; // Токен вашего бота
//         // const chatId = '5120801744'; // ID получателя (пользователя)
//         const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`; // URL для отправки сообщения

//         // Формируем сообщение в формате HTML
//         const message = `
//         📩 Вам новая заявка:
//         <b>Имя:</b> ${formData.firstName}
//         <b>Телефон:</b> ${formData.phone}
//           `;

//         // Параметры, которые будем отправлять
//         const params = {
//             chat_id: chat_id, // ID чата
//             text: message, // Текст сообщения
//             parse_mode: 'HTML' // Режим парсинга HTML
//         };
//         // Отправляем данные с помощью fetch API
//         return fetch(apiUrl, {
//             method: 'POST', // Метод отправки
//             headers: {
//                 'Content-Type': 'application/json', // Указываем тип содержимого
//             },
//             body: JSON.stringify(params) // Преобразуем параметры в JSON
//         }).then(response => response.json()); // Возвращаем ответ в формате JSON
//     }


//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         handleChange;
//         sendDataToTelegram(formData);
//     };

//     // console.log(botToken)


//     return (
//         <div className="flex flex col">
//             <form onSubmit={handleSubmit} id="dataForm" className="flex flex-col">
//                 <h1>Форма для сбора данных</h1>
//                 <label htmlFor="name">Имя:</label>
//                 <input type="text" name="name" onChange={handleChange} required />
//                 <label htmlFor="phone">Номер телефона:</label>
//                 <input type="tel" name="phone" onChange={handleChange} required />
//                 <button type="submit">Отправить</button>
//             </form>
//         </div>
//     )
// }
'use client'
import { useState } from 'react';

export function ContactForm() {
  const [userInput, setUserInput] = useState({
    username: '',
    phone: '',
  });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setUserInput({ ...userInput, [name]: value });
//   };

  const handleChange = (e: any) => {
            const { name, value } = e.target;
            setUserInput(prevData => ({
              ...prevData,
              [name]: value
            }));
          };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
      });

      if (response.ok) {
        // toast.success('Message sent successfully!');
        setUserInput({ username: '', phone: ''});
      } else {
        // toast.error('Failed to send message.');
      }
    } catch (error) {
    //   toast.error('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Your Name:</label>
        <input
          type="text"
          name="username"
          value={userInput.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Your Phone:</label>
        <input
          type="text"
          name="phone"
          value={userInput.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
