import { SocialNets } from '@/components/SocialNets/SocialNets'

export default function Social() {

    return (

        <section className="mt-4">
            <SocialNets />
            <section>
                <ul>
                    <li className="my-4">
                        <a href="https://github.com/energetikk" target="_blank" rel="noopener noreferrer" className="flex w-min items-center rounded-md bg-white px-1 py-1 text-black transition hover:translate-x-2">
                            <span className="ml-2">Github</span>
                        </a>
                    </li>
                    <li className="my-4">
                        <a href="https://vk.com/pavlikdemin" target="_blank" rel="noopener noreferrer" className="flex w-min items-center rounded-md bg-white px-1 py-1 text-black transition hover:translate-x-2">
                            <span className="ml-2">Вконтакте</span>
                        </a>
                    </li>
                    <li className="my-4">
                        <a href="https://instagram.com/pavlikdemin" target="_blank" rel="noopener noreferrer" className="flex w-min items-center rounded-md bg-white px-1 py-1 text-black transition hover:translate-x-2">
                            <span className="ml-2">Instagram</span>
                        </a>
                    </li>
                    <li className="my-4">
                        <a href="https://LinkedIn.com/pavlikdemin" target="_blank" rel="noopener noreferrer" className="flex w-min items-center rounded-md bg-white px-1 py-1 text-black transition hover:translate-x-2">
                            <span className="ml-2">LinkedIn</span>
                        </a>
                    </li>
                    <li className="my-4">
                        <a href="https://t.me/paweldemin" target="_blank" rel="noopener noreferrer" className="flex w-min items-center rounded-md bg-white px-1 py-1 text-black transition hover:translate-x-2">
                            <span className="ml-2">Telegram</span>
                        </a>
                    </li>
                    <li className="my-4">
                        <a href="https://nn.hh.ru/resume/dc946dc4ff0c6d81860039ed1f71706350634e" target="_blank" rel="noopener noreferrer" className="flex w-min items-center rounded-md bg-white px-1 py-1 text-black transition hover:translate-x-2">
                            <span className="ml-2">HeadHunter</span>
                        </a>
                    </li>
                </ul>
            </section>
        </section>
    )
}