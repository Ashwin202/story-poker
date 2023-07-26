"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CreateGame from "@/components/CreateGame";

const Dashboard: React.FC = () => {
   const router = useRouter();
   return (
      <div className='flex justify-center items-center h-screen flex-col'>
         <Button variant='outline' className='outline-sky-900 outline outline-4 my-8 p-8 text-2xl xs:text-xs md:w-1/5 hover:bg-blue-400' onClick={() => router.push("/admin/stats")}>
            STATS
         </Button>
         <Dialog>
         <DialogTrigger asChild>
            <Button variant='outline' className='outline-sky-900 outline outline-4 my-8 p-8 text-2xl xs:text-xs md:w-1/5 hover:bg-blue-400'>
               CREATE GAME
            </Button>
         </DialogTrigger>
         <CreateGame />
         </Dialog>
      </div>
   );
};

export default Dashboard;
