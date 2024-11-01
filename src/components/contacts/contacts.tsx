'use client'
import { useState } from "react";
import { DialogAvatar } from '@/components/avatar/avatar';
import { DialogDemo } from '@/components/dialogPopup/dialogPopup';
import { ResumePopup } from '@/components/resumePopup/resumePopup';


export default function Contacts() {


    const [contacts, setContacts] = useState(false);

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
                {/* <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0"> */}
                {/* <img src="https://i.imgur.com/kdhlGs3.png" className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0">
                </img> */}
                <DialogAvatar/>
                <h1 className="text-xl font-bold">Дёмин Павел</h1>
                <p className="text-gray-700">Frontend Developer</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button onClick={() => setContacts(!contacts)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">{`${contacts ? 'Контакты' : 'Мой стек'}`}</button>
                <div><ResumePopup/></div>
                <div><DialogDemo/></div>
                </div>
            </div>
            <hr className="my-6 border-t border-gray-300" />

            {contacts ?
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold  mb-2">Стек технологий:</span>
                    <ul className="">
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">JavaScript</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">Next.js</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">React</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">Node.js/Express.js</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">HTML/CSS/SCSS</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">Tailwind CSS</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">Shadcn/ui</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">Prisma</li>
                        <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:underline hover:translate-x-2">Docker</li>
                    </ul>
                </div> 
                :
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold  mb-2">Мои контакты:</span>
                    <ul className="">
                        <li className="mb-2"><span>Гор.:&ensp;</span><a className="cursor-pointer hover:underline" href="https://yandex.ru/maps/-/CDdaEQOF" target='_blanck'>Нижний Новгород, Россия</a></li>
                        <li className="mb-2"><span>Тел.:&ensp;</span><a className="cursor-pointer hover:underline" href="tel:+79871131714" target='_blanck'>+7(987)-113-17-14</a></li>
                        <li className="mb-2"><span>Telegram:&ensp;</span><a className="cursor-pointer hover:underline" href="https://t.me/paweldemin" target='_blanck'>@paweldemin</a></li>
                        <li className="mb-2"><span>E-mail:&ensp;</span><a className="cursor-pointer hover:underline" href="mailto:pavlikdemin@ya.ru" target='_blanck'>pavlikdemin@ya.ru</a></li>
                        <li className="mb-2"><span>GH:&ensp;</span><a className="cursor-pointer hover:underline" href="https://github.com/energetikk" target='_blanck'>https://github.com/energetikk</a></li>
                    </ul>
                </div>
                
            }
        </div>
    )
}
