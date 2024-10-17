'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-around gap-4 text-center">
            <Link href="/" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/' ? 'activelink' : ''}`}>
                <h3 className="text-base font-bold">Обо мне</h3>
            </Link>
            <Link href="/projects" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/projects' ? 'activelink' : ''}`}>
                <h3 className="text-md font-bold">Мои работы</h3>
            </Link>
            {/* <Link href="/social" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/social' ? 'activelink' : ''}`}>
                <h3 className="text-md font-bold">Мои соцсети</h3>
            </Link> */}
            <Link href="/contacts" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/contacts' ? 'activelink' : ''}`}>
                <h3 className="text-md font-bold">Свяжитесь со мной</h3>
            </Link>
        </nav>
    )
}