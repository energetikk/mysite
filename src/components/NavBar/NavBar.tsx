'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between">
            <Link href="/bio" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/bio' ? 'activelink' : ''}`}>
                <h2 className="text-md font-bold">Обо мне</h2>
            </Link>
            <Link href="/bio/projects" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/bio/projects' ? 'activelink' : ''}`}>
                <h2 className="text-md font-bold">Мои работы</h2>
            </Link>
            <Link href="/bio/social" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/bio/social' ? 'activelink' : ''}`}>
                <h2 className="text-md font-bold">Мои соцсети</h2>
            </Link>
            <Link href="/bio/contacts" className={`border-2 p-2 px-2 rounded-lg hover:shadow ${pathname === '/bio/contacts' ? 'activelink' : ''}`}>
                <h2 className="text-md font-bold">Свяжитесь со мной</h2>
            </Link>
        </nav>
    )
}