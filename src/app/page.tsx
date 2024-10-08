import { ContactForm } from '@/app/components/form/form';

export default function Home() {
  
  const tok = process.env.TOKEN
  return (
    <main className="flex flex col">
      <ContactForm />
    </main>
  );
}
