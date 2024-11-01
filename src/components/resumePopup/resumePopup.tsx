import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function ResumePopup() {

    const openLinkInNewTab = () => {
        const url = 'https://nn.hh.ru/resume/dc946dc4ff0c6d81860039ed1f71706350634e'; // Замените ссылку на вашу внешнюю ссылку
        window.open(url, '_blank');
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Моё резюме</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Вы хотите перейти на сайт HeadHunter?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Моё более подробное резюме доступно на сайте hh.ru. Подтверждаете переход на сайт HeadHunter!?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction onClick={openLinkInNewTab} className="bg-blue-500 hover:bg-blue-700">
                        Перейти
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
