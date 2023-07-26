import React from "react";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CreateGame = () => {
   console.log("Create Game");
   return (
      <DialogContent className='sm:max-w-[500px]'>
         <DialogHeader>
            <DialogTitle>Create Game</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
         </DialogHeader>
         <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
               <Label htmlFor='name1' className='text-center'>
                  Sprint Name
               </Label>
               <Input id='name1' placeholder="Enter name" className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
               <Label htmlFor='name2' className='text-center'>
                  Sprint Number
               </Label>
               <Select>
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
            <Button type='submit'>Create Game</Button>
         </DialogFooter>
      </DialogContent>

      // <>
      //   <DialogContent className="sm:max-w-[425px]">
      //     <DialogHeader>
      //       <DialogTitle>Edit profile</DialogTitle>
      //       <DialogDescription>
      //         Make changes to your profile here. Click save when you're done.
      //       </DialogDescription>
      //     </DialogHeader>
      //     <div className="grid gap-4 py-4">
      //       <div className="grid grid-cols-4 items-center gap-4 bg-red-500">
      //       <Label htmlFor="username" className="text-center">
      //           Name
      //         </Label>
      //         <Input id="name" value="Pedro Duarte" className="col-span-3" />
      //       </div>
      //       <div className="grid grid-cols-4 items-center gap-4  bg-gray-500">
      //         <Label htmlFor="username" className="text-center">
      //           Username
      //         </Label>
      //         <Input id="username" value="@peduarte" className="col-span-3" />
      //       </div>
      //       <div className="grid grid-cols-4 items-center gap-4  bg-red-300">
      //         <Label htmlFor="username" className="text-center">
      //           Username
      //         </Label>
      //         <Input id="username" value="@peduarte" className="col-span-3" />
      //       </div>
      //       <div className="grid grid-cols-4 items-center gap-4 bg-blue-500">
      //         <Label htmlFor="username" className="text-center">
      //           Username
      //         </Label>
      //         <Input id="username" value="@peduarte" className="col-span-3" />
      //       </div>
      //     </div>
      //     <DialogFooter>
      //       <Button type="submit">Save changes</Button>
      //     </DialogFooter>
      //   </DialogContent>
      // </>
   );
};

export default CreateGame;
