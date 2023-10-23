"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormEventHandler, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import {signIn}  from "next-auth/react";

export default function Home() {
   const [userDetails, setUserDetails] = useState<object>({username:'', password:'', userType:''});

   const checkCredentials = async()=> {
    try{
      const res = await signIn('credentials',{
         ...userDetails,
         redirect:false
      })
      console.log(res)
    }
    catch(error){
      alert(error)
      throw new Error('Login failed. Please try again.');
    }
   };

   return (
         <div className='flex min-h-screen flex-col items-center p-24'>
            <h1 className='text-3xl'>Enter into the pocker ♣️♦️♠️♥️</h1>
            <Card className='my-10 p-4'>
               <div className='grid grid-rows-2 md:grid-rows-4 gap-4 py-0'>
                  <div className='grid md:grid-cols-2 items-center gap-2'>
                  <Label htmlFor='username' className='text-left'>
                        Username
                     </Label>
                  <Select
                  onValueChange={(value) => {
                     setUserDetails({...userDetails, userType:value});
                  }}>
                  <SelectTrigger className='col-span-1'>
                     <SelectValue placeholder='Select User type' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value='1'>Admin</SelectItem>
                     <SelectItem value='0'>Team</SelectItem>
                  </SelectContent>
               </Select>
                  </div>
                  <div className='grid md:grid-cols-2 items-center gap-2'>
                     <Label htmlFor='username' className='text-left'>
                        Username
                     </Label>
                     <Input id='name' type='text' placeholder='Enter username' className='col-span-1' onChange={(e) => setUserDetails({...userDetails, username:e.target.value})} />
                  </div>
                  <div className='grid md:grid-cols-2 items-center gap-2'>
                     <Label htmlFor='password' className='text-left'>
                        Password
                     </Label>
                     <Input id='password' type='password' placeholder='Enter password' className='col-span-1' onChange={(e) => setUserDetails({...userDetails, password:e.target.value})} />
                  </div>
                  <Button
                     className='mt-2 hover:bg-sky-600'
                     onClick={() => {
                        checkCredentials();
                     }}>
                     Login
                  </Button>
               </div>
            </Card>
         </div>
   );
}
