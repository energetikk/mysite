import { ContactForm } from '@/components/form/form';
import Link from "next/link"

export default function Home() {

  return (
    <main className="flex flex-col justify-center h-screen bg-gray-100">
      <ContactForm />
      <Link href='/bio' className='underline self-center mt-5'>Черновая версия сайта</Link>
    </main>
  );
}
