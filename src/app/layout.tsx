import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from '@/components/NavBar/NavBar'
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Pavel Demin | Frontend developer",
  description: "Современные web-технологии!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <section>
            <div className="min-h-screen bg-gray-200">
                <div className=" mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center text-center">
                                    <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0">
                                    </img>
                                    <h1 className="text-xl font-bold">Дёмин Павел</h1>
                                    <p className="text-gray-700">Frontend Developer</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="/social" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Контакты</a>
                                        <a href="https://nn.hh.ru/resume/dc946dc4ff0c6d81860039ed1f71706350634e" target='_blanck' className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Моё Резюме</a>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
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
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9 bg-white shadow rounded-lg p-6">
                            <NavBar />
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
    </body>
    </html>

  )
}
