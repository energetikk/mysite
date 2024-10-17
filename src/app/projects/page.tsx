export default function Projects() {

    return (

        <section className="mt-4">
            <h2 className="text-3xl font-bold dark:text-white">Список приложений</h2>
            <p className="mt-6 text-lg dark:text-neutral-200">Последние реализованные приложения и стек технологий:</p>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <a href="https://www.howtolearn.paveldev.ru" target="_blank">
                    <section
                        className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                        <header className="flex items-center justify-between dark:text-gray-50">
                            <a href="https://www.howtolearn.paveldev.ru" target="_blank" className="hover:underline">
                                <h3 className="text-lg font-bold">Научиться учиться!</h3>
                            </a>
                        </header>

                        <div className="mt-2 dark:text-gray-300">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?</div>

                        <footer className="my-4 flex gap-1 flex-wrap">
                            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">nextjs</span>
                            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">typescript</span>
                            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sass</span>
                        </footer>
                    </section>
                </a>

                <section
                    className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://www.russiantravel.paveldev.ru" target="_blank" className="hover:underline">
                            <h3 className="text-lg font-bold ">Путешествие по России</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">Настоящая страна не в выпусках новостей, а здесь.</div>

                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">11ty</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sass</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">javascript</span>
                    </footer>
                </section>

                <section
                    className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://mesto-demin.vercel.app" target="_blank" className="hover:underline">
                            <h3 className="text-lg font-bold">Mesto</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">Text editor developed with the Qt framework. Features standard fie
                        operations, syntax highlighting, brace autocomplete, and auto-indentation.</div>

                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">c++</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">qt5</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">qtcreator</span>
                    </footer>
                </section>

                <section
                    className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://paveldemin.vercel.app/" target="_blank" className="hover:underline">
                            <h3 className="text-lg font-bold">Movies Explorer</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">A database-driven web app that allows you to visualize U.S. gun crime
                        statistics and trends for the period of 2013-2018.</div>

                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">react</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">typescript</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">express</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sql</span>
                    </footer>
                </section>

                <section
                    className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
                    <header className="flex items-center justify-between dark:text-gray-50">
                        <a href="https://basefilm.vercel.app/" target="_blank" className="hover:underline">
                            <h3 className="text-lg font-bold">BaseFilms</h3>
                        </a>
                    </header>
                    <div className="mt-2 dark:text-gray-300">Embody is a dungeon crawler inspired by the Binding of Isaac that lets
                        you possess dead enemies.</div>

                    <footer className="my-4 flex gap-1 flex-wrap">
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">C#</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">unity</span>
                        <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">game-ai</span>
                    </footer>
                </section>

                <section className="flex flex-col items-center justify-center">
                    <header>
                        <h3 className="text-xl font-bold dark:text-white">Want to see more of my work</h3>
                        <h4 className="text-center text-lg dark:text-neutral-200">Check out my other repos:</h4>
                    </header>
                    <div className="mt-4">
                        <a href="https://github.com/energetikk">
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