'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
// import { DialogDemo } from "../dialogPopup/dialogPopup";

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-left gap-10 text-center">
            <Link href="/" className={`border-2 p-2 px-2 w-40 rounded-lg hover:shadow-lg ${pathname === '/' ? 'activelink' : ''}`}>
                <h3 className="text-base font-bold">Обо мне</h3>
            </Link>
            <Link href="/projects" className={`border-2 p-2 px-2 w-40 rounded-lg hover:shadow-lg ${pathname === '/projects' ? 'activelink' : ''}`}>
                <h3 className="text-md font-bold">Мои работы</h3>
            </Link>
            {/* <Link href="/social" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/social' ? 'activelink' : ''}`}>
                <h3 className="text-md font-bold">Мои соцсети</h3>
            </Link> */}
            {/* <Link href="/contacts" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/contacts' ? 'activelink' : ''}`}>
                <h3 className="text-md font-bold">Свяжитесь со мной</h3>
            </Link> */}
            {/* <DialogDemo/> */}
        </nav>
    )
}