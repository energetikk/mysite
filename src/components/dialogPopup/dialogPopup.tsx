'use client'
import { useState } from 'react';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
 
export function DialogDemo() {

  const [userInput, setUserInput] = useState({
    username: '',
    text: '',
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
        setUserInput({ username: '', text: '', phone: '', email: '' });

      } else {
        console.log('Ошибка отправки сообщения в телеграмм');
      }
    } catch (error) {
      console.log(`Ошибка: ${error}`)
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='text-md bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded'>Связь со мной</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>Для связи со мной:</DialogTitle>
          <DialogDescription>
            Оставьте свои контактные данные и я Вам перезвоню/напишу в кратчайшие сроки.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Имя:
            </Label>
            <Input id="username" name="username" value={userInput.username} required onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Собщение:
            </Label>
            {/* <Input /> */}
            <Textarea id="text" name="text" value={userInput.text} required onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Телефон:
            </Label>
            <Input id="phone" name="phone" value={userInput.phone} required onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              E-mail:
            </Label>
            <Input id="email" name="email" value={userInput.email} onChange={handleChange} className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button type="submit" >Отправить контакты</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

