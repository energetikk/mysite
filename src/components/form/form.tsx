'use client'

import { useState } from 'react';

export function ContactForm() {
  const [userInput, setUserInput] = useState({
    username: '',
    phone: '',
    email: '',
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
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
      });

      if (response.ok) {
        console.log('Сообщение успешно отправлено!');
        setUserInput({ username: '', phone: '', email: '' });

      } else {
        console.log('Ошибка отправки сообщения в телеграмм');
      }
    } catch (error) {
      console.log(`Ошибка: ${error}`)
    }
  };

  return (
    <div className="flex justify-center mt-20 px-8">
      <form className="max-w-2xl bg-white" onSubmit={handleSubmit}>
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
          <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">Для связи со мной:</h2>

          <div className="flex flex-col gap-2 w-full border-gray-400">

            <div>
              <label className="text-gray-600 dark:text-gray-400">Ваше имя:</label>
              <input
                value={userInput.username}
                onChange={handleChange}
                required
                name="username"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text" />
            </div>

            <div>
              <label className="text-gray-600 dark:text-gray-400">Телефон</label>
              <input
                value={userInput.phone}
                onChange={handleChange}
                required
                name="phone"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text" />
            </div>

            <div>
              <label className="text-gray-600 dark:text-gray-400">Email</label>
              <input
                value={userInput.email}
                onChange={handleChange}
                name="email"
                required
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="email" />
            </div>

            <div className="flex justify-center">
              <button
                className="py-1.5 px-3 m-1 text-center bg-sky-700 border rounded-md text-white  hover:bg-sky-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                type="submit">Отправить контакт</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
