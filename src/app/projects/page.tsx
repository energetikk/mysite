import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Pavel Demin | Проекты",
  };

export default function Projects() {

    return (

        <section className="mt-4">
            <h2 className="text-3xl font-bold dark:text-white">Список приложений</h2>
            <p className="mt-6 text-lg dark:text-neutral-200">Последние реализованные приложения и стек технологий:</p>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* <a href="https://www.howtolearn.paveldev.ru" target="_blank"> */}
                    <section
                        className="card rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                        <header className="flex items-center justify-between dark:text-gray-50">
                            <a href="https://www.howtolearn.paveldev.ru" target="_blank" className="cursor-pointer hover:underline">
                                <h3 className="text-lg font-bold text-blue-500 hover:text-blue-600">Научиться учиться!</h3>
                            </a>
                        </header>

                        <div className="mt-2 dark:text-gray-300">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?</div>

                        <footer className="my-4 flex gap-1 flex-wrap">
                            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">JS</span>
                            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Flex/Grid</span>
                            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">CSS3</span>
                            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">BEM</span>
                        </footer>
                    </section>
                {/* </a> */}

                <section
                    className="card rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://www.russiantravel.paveldev.ru" target="_blank" className="cursor-pointer hover:underline">
                            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-600">Путешествие по России</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">Настоящая страна не в выпусках новостей, а здесь. Путешествие в два клика по самым невероятным уголкам нашей страны!</div>

                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">JS</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Flex/Grid</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">BEM</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">PixelPerfect</span>
                    </footer>
                </section>

                <section
                    className="card rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://basefilm.vercel.app/" target="_blank" className="cursor-pointer hover:underline">
                            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-600">КиноСклад</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">На сайте можно зарегистрироваться и искать фильмы по базе данных. Администраторы добавляют новые фильмы, чтобы всегда было что посмотреть.</div>

                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Next.js</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">TailWind</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Shadcn/ui</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Prisma</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">PostgreSQL</span>
                    </footer>
                </section>

                <section
                    className="card rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://mesto.paveldev.ru" target="_blank" className="cursor-pointer hover:underline">
                            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-600">Mesto</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">Сервис Mesto представляет собой интерактивную платформу, на которой можно создать свой аккаунт, добавлять фотографии, удалять их и ставить лайки.</div>
                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">React.js</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Express.js</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">SASS</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Docker</span>
                    </footer>
                </section>

                <section
                    className="card rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://movies.paveldev.ru/" target="_blank" className="cursor-pointer hover:underline">
                            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-600">Movies Explorer</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">Проект Movies Explorer – это интерактивная страница, где можно пройти регистрацию, авторизоваться, редактировать профиль, находить фильмы, узнавать их длительность и смотреть трейлеры. Понравившиеся фильмы можно добавить в "Сохраненные фильмы", чтобы позже не искать их снова. </div>

                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">React.js</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Express.js</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">SCSS</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">Docker</span>
                    </footer>
                </section>

                <section className="flex flex-col items-center justify-center">
                    <header>
                        <h3 className="text-xl font-bold dark:text-white">Хотите увидеть больше моих работ?</h3>
                        <h4 className="text-center text-lg dark:text-neutral-200">Проверьте мои другие репозитории:</h4>
                    </header>
                    <div className="mt-4">
                        <a href="https://github.com/energetikk?tab=repositories">
                            <svg className="h-12 text-black dark:text-white" role="img" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path fill="currentColor"
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                                </path>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </section>
    )

}