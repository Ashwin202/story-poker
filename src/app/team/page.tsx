import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const TeamJoin = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className='mb-2' style={{color:'#feefff', fontSize:'36px', fontWeight:700}}>JOIN THE GAME</h1>
      <Input className='bg-input-box w-1/2 h-14 text-center ' placeholder='Enter the code...' style={{color:'#feefff', fontSize:'28px', textTransform:'uppercase'}} autoCapitalize="characters"/>
      <Button className='my-4 w-1/12 bg-green-button hover:bg-sky-700'>JOIN</Button>
    </div>
  )
}

export default TeamJoin