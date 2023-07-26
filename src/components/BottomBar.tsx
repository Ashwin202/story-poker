"use client"
import React from 'react'
import Image from 'next/image'
import CountdownTimer from '../components/CountdownTimer';
import { createContext, useState, useEffect, useContext, useReducer } from 'react';
import TimerContext from './BottomBarState';

interface BottomBarProps {
}

interface VerdictProps {
  verdict: number
}

const Verdict: React.FC<VerdictProps> = ({verdict}) =>  {
  return (
    <div className= "w-16 h-16 flex justify-center items-center rounded-full text-center bg-slate-100"> 
      <span className="text-4xl text-black" >{verdict} </span>
    </div>
  )
}

const BottomBar = (props: BottomBarProps) => {
  const targetTime = 15
  const finalStoryPoint = 15
  const [timerReset,setTimerReset] = useState<boolean>(false)
  return (
    <TimerContext.Provider value = {{timerReset, setTimerReset}}>
      <div className="h-24 w-full flex justify-start items-center flex-row">
        <div className='w-1/4 flex justify-center flex-row'>
          <Verdict 
            verdict={finalStoryPoint}
          />
        </div>
        <div className='w-1/4 flex justify-center'>
          <CountdownTimer 
              targetTime={targetTime}
            />
        </div>
        <div className='w-1/4 flex justify-center'>
          <button onClick={() => setTimerReset(true)}>
            <Image
              src= "/reset-svgrepo-com.svg"
              width={70}
              height={70}
              alt="reset"
            />
          </button>
        </div>
        <div className='w-1/4 flex justify-center' >
            <button className='bg-blue-500 text-4xl rounded-lg text-black p-2 '>
              <div>Next {'->'}</div>
            </button>
        </div>
      </div>
    </TimerContext.Provider>
  )
}

export default BottomBar