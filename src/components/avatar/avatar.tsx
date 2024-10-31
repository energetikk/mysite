'use client'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
 
export function DialogAvatar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img src="https://i.imgur.com/kdhlGs3.png" className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0"></img>
      </DialogTrigger>
      <DialogContent className=" flex justify-center h-1/2 p-0">
        <img src="https://i.imgur.com/kdhlGs3.png" className="object-cover "></img>
      </DialogContent>
    </Dialog>
  )
}

