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

    return (
        <AlertDialog>
            <AlertDialogTrigger>Моё резюме</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Вы хотите перейти на сайт HeadHunter?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Моё более подробное резюме доступно на сайте hh.ru. Подтверждаете переход на сайт HeadHunter!?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction className="bg-transparent hover:bg-transparent">
                        <Button><a href="https://nn.hh.ru/resume/dc946dc4ff0c6d81860039ed1f71706350634e" target='_blanck' className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Моё Резюме</a>
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}



{/* <a href="https://nn.hh.ru/resume/dc946dc4ff0c6d81860039ed1f71706350634e" target='_blanck' className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Моё Резюме</a> */}
