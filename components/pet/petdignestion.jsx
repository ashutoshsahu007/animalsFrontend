"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { Button } from "../ui/button";
import { FaDog } from "react-icons/fa";
import { useEffect, useState } from "react";



export function PetDietcian() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog className="mb-4" open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-[104px] w-[173px] md:h-[157px] md:w-full  bg-black max-w-[243px]  mx-auto text-white rounded-3xl shadow-md font-bold sm:text-xl">
          <div className="flex flex-col items-center md:gap-5 gap-1 justify-center">
            <Image className="md:w-[60px] w-[50px] h-[50px]  md:h-[60px] "
              src="/health.png"
              alt="dog"
              width={80}
              height={80}
            />
            Pet Dignestion
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-serif font-bold">Add New Admin</DialogTitle>
        </DialogHeader>
        {/* <AdminSignupForm setOpen={setOpen} /> */}
      </DialogContent>
    </Dialog>
  );
}