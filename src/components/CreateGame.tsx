import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as Dialog from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const CreateGame: React.FC = () => {
   const { toast } = useToast();

   const [sprintNo, setSprintNo] = useState<string | number>("");
   const [sprintName, setSprintName] = useState<any>("");
   const addGame = (): void => {
      if (sprintNo && sprintName) {
         toast({
            title: sprintName,
            description: sprintNo,
            duration: 3000,
         });
      }
   };
   return (
      <DialogContent className='sm:max-w-[500px]'>
         <DialogHeader>
            <DialogTitle>Create Game</DialogTitle>
            <DialogDescription>Create your poker game here!</DialogDescription>
         </DialogHeader>
         <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
               <Label htmlFor='name1' className='text-center'>
                  Sprint Name
               </Label>
               <Input
                  id='name1'
                  type="text" 
                  placeholder='Enter name'
                  className='col-span-3'
                  onChange={(e) => {
                     setSprintName(e.target.value);
                  }}
               />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
               <Label htmlFor='name2' className='text-center'>
                  Sprint Number
               </Label>
               <Select
                  onValueChange={(value) => {
                     setSprintNo(value);
                  }}>
                  <SelectTrigger className='col-span-3'>
                     <SelectValue placeholder='Select Sprint ...' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value='light'>1</SelectItem>
                     <SelectItem value='dark'>2</SelectItem>
                     <SelectItem value='system'>3</SelectItem>
                  </SelectContent>
               </Select>
            </div>
         </div>
         <DialogFooter>
            <Dialog.Close asChild>
               <Button
                  type='submit'
                  onClick={() => {
                     addGame();
                  }}>
                  Create Game
               </Button>
            </Dialog.Close>
         </DialogFooter>
      </DialogContent>
   );
};

export default CreateGame;
