'use client'

import { useState } from 'react';

export function ContactForm() {
  const [userInput, setUserInput] = useState({
    username: '',
    phone: '',
  });

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
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
      });

      if (response.ok) {
        console.log('Сообщение усмешно отправлено!');
        setUserInput({ username: '', phone: '' });

      } else {
        console.log('Ошибка отправки сообщения в телеграмм');
      }
    } catch (error) {
      console.log(`Ошибка: ${error}`)
    }
  };

  return (
    <div className='flex bg-red-400 border-2'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ваше имя:</label>
          <input
            type="text"
            name="username"
            value={userInput.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ваш телефон:</label>
          <input
            type="text"
            name="phone"
            value={userInput.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Отправить</button>
      </form>

    </div>
  );
}

export default ContactForm;
