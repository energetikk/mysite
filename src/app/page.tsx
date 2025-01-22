// import { ContactForm } from '@/components/form/form';
// import { SocialNets } from "@/components/SocialNets/SocialNets"

export default function Home() {

    return (
        // <main className="flex flex-col justify-center h-screen bg-gray-100">


        <main className="">

            <p className="text-gray-700 mt-6"><span className="font-bold">Frontend-разработчик</span> с опытом работы 2,5 года. Специализируюсь на создании и поддержке SPA-приложений. Умею самостоятельно находить решения сложных задач, но всегда готов обратиться за помощью к коллегам, если это необходимо. В первую очередь ориентируюсь на бизнес-требования.
                <br />Обладаю навыками быстрого поиска информации в интернете и умею составлять эффективные запросы для GPT. Также имею базовые знания Linux и навыки настройки VPS.
                <br />Умею деплоить приложения с помощью Docker Compose и Nginx, настраивать CI/CD pipeline, а также разбираюсь в облачной инфрастурктуре и сетях, умею поднимать VPN.
                <br />Для меня важно, чтобы команда стремилась создавать качественный и современный продукт. Буду рад работать в компании, которая ценит технологии.
            </p>

            <h4 className="mt-6"><span className="font-bold text-gray-700">Основной стек:</span> Next.js/React.js, TypeScript, Redux, SCSS, Docker, Nginx, Git.</h4>

            <h2 className="text-xl font-bold mt-6 mb-4">Опыт работы:</h2>
            <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Frontend-разработчик (Next.js, React)</span>
                    <p>
                        <span className="text-gray-700 mr-2">АО "Атомэнергопроект"</span>
                        <span className="text-gray-700">2024 - 2025</span>
                    </p>
                </div>
                <h4 className="mt-6"><span className="text-gray-700 font-bold">Стек:</span>Next.js, TypeScript, React, HTML, CSS, JavaScript, Redux, Webpack, Yarn, Docker, Git/GitLab.</h4>
                <ul className="mt-2 ml-6 list-disc">
                    <li>Участвовал в нескольких значимых внутренних проектах компании, включая проекты связанные с порталами для обучения персонала, анкетирование персонала, сбор обратной связи. Количество пользователей до 22000 сотрудников компании в разных точках мира.
                    </li>
                    <li>Реализовал обновление данных в реальном времени, обеспечив пользователям доступ к актуальной информации в справочнике компании.
                    </li>
                    <li>Создал и внедрил новые карточки пользователей справочника сотрудников с учетом их нахождения в разных странах мира (компания имеет много разных филиалов за рубежом).
                    </li>
                    <li>Декомпозиция компонентов: Разделил большие монолитные компоненты на более мелкие, самостоятельные модули, улучшив читаемость кода и его повторное использование.
                    </li>
                    <li>Обеспечил повторное использование компонентов в разных частях приложения, снизив дублирование и затраты на разработку.
                    </li>
                    <li>Проводил onboarding для новых сотрудников
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Frontend-разработчик (React)</span>
                    <p>
                        <span className="text-gray-700 mr-2">Daimax-digital</span>
                        <span className="text-gray-700">2022 - 2024</span>
                    </p>
                </div>
                <h4 className="mt-6"><span className="text-gray-700 font-bold">Стек:</span> Typescript, React, Redux, Tailwind, Eslint, Prettier, Docker, React-hook-form, Scrum, Git.</h4>
                <ul className="mt-2 ml-6 list-disc">
                    <li>
                        Предложил внедрить GitFlow в процесс разработки проектов, что привело к избавлению от работы напрямую с мастер-веткой
                    </li>
                    <li>
                        Перенёс CRM систему с самописного внутреннего UI кита на Shadcn/ui, Tailwind, что привело к значительному ускорению последующей разработки проекта.
                    </li>
                    <li>
                        Использовал CSS Grid и Flexbox для создания гибкой верстки, которая автоматически адаптируется к размеру экрана. Также применял медиа-запросы для изменения стилей в зависимости от устройства и разрабатывал интерфейс, учитывающий особенности сенсорного ввода
                    </li>
                    <li>
                        Использовал CSS Grid и Flexbox для создания гибкой верстки, которая автоматически адаптируется к размеру экрана. Также применял медиа-запросы для изменения стилей в зависимости от устройства и разрабатывал интерфейс, учитывающий особенности сенсорного ввода
                    </li>
                    <li>
                        Настроил Docker Compose и Nginx для деплоя приложения на VPS, что повысило надёжность и доступность приложения
                    </li>
                    <li>
                        Настроил CI/CD с GitHub Actions для сборки и развёртывания SPA-приложения.
                    </li>
                    <li>
                        Адаптировал верстку, настроил стили для разных браузеров
                    </li>
                    <li>
                        Настроил EsLint и Prettier на проекте.
                    </li>
                </ul>
            </div>

        </main>
    );
}
