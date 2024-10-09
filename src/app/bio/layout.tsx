import  NavBar  from '@/components/NavBar/NavBar'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <div className="min-h-screen bg-gray-200">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center text-center">
                                    <img src="https://downloader.disk.yandex.ru/preview/b9fe4c9df25666eda6421a98b21d1645c825a275879fcadb2cea4d09d96cc71c/67071ce5/cQC3mDaRbDJZnRh59YOLqDQct_a_OqeipC7WsIAg19KHiEN5EU1Gflmd3h-FZdcDwxsLDcgWQ1wlTlZbTtpTzw%3D%3D?uid=0&filename=photo_2023-04-09_00-32-00.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=204x204" className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0">
                                    </img>
                                    <h1 className="text-xl font-bold">Pavel Demin</h1>
                                    <p className="text-gray-700">Frontend Developer</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                        <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                    <ul>
                                        <li className="mb-2">JavaScript</li>
                                        <li className="mb-2">Next.js</li>
                                        <li className="mb-2">React</li>
                                        <li className="mb-2">Node.js/Express.js</li>
                                        <li className="mb-2">HTML/CSS/SCSS</li>
                                        <li className="mb-2">Tailwind CSS</li>
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
}