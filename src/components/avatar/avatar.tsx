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
        <img src="https://i.postimg.cc/R04KjQ2R/2024-11-01-23-32-43.png" className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0"></img>
      </DialogTrigger>
      {/* <DialogContent className=" flex justify-center h-1/2 p-0 border-none">  */}
      <DialogContent className=" flex justify-center w-full max-w-lg p-0 border-none"> 
        <img src="https://i.postimg.cc/R04KjQ2R/2024-11-01-23-32-43.png" className="object-cover"></img>
      </DialogContent>
    </Dialog>
  )
}

