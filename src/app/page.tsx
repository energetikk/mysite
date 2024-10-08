import { ContactForm } from '@/components/form/form';

export default function Home() {
  
  return (
    <main className="flex flex-col border-2 border-cyan-300">
      <p className='bg-fuchsia-600'>Для связи со мной отправьте мне свои контактные данные:</p>
      <ContactForm />
    </main>
  );
}
