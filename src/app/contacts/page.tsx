import { Metadata } from 'next';
import { ContactForm } from '@/components/form/form';

export const metadata: Metadata = {
    title: "Pavel Demin | Форма обратной связи",
  };

export default function Contacts() {

    return (
        <ContactForm />
    )
}
