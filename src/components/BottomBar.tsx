"use client";
import React from "react";
import Image from "next/image";
import CountdownTimer from "../components/CountdownTimer";
import { createContext, useState, useEffect, useContext, useReducer } from "react";
import TimerContext from "./BottomBarState";
import { PollingContext } from "@/store/contexts/PollingContext";

interface BottomBarProps {}

interface VerdictProps {
	verdict: number | null;
}

const Verdict: React.FC<VerdictProps> = ({ verdict }) => {
	return (
		<div className="w-16 h-16 flex justify-center items-center rounded-full text-center bg-slate-100">
			<span className="text-xl text-black">{verdict} </span>
		</div>
	);
};

const BottomBar = (props: BottomBarProps) => {
	const contextValue = useContext(PollingContext);

	if (!contextValue) {
		return <div>Loading...</div>;
	}
	const { selectedCard, setSelectedCard } = contextValue;

	const targetTime = 15;
	// const finalStoryPoint = {selectedCard}
	const [timerReset, setTimerReset] = useState<boolean>(false);
	return (
		<TimerContext.Provider value={{ timerReset, setTimerReset }}>
			<div className="h-full w-full flex items-center flex-row">
				<div className="w-1/4 flex justify-center flex-row">
					<Verdict verdict={selectedCard} />
				</div>
				<div className="w-1/4 h-1/4 flex justify-center">
					<CountdownTimer targetTime={targetTime} />
				</div>
				<div className="w-1/4 flex justify-center">
					<button onClick={() => setTimerReset(true)}>
						<Image src="/reset-svgrepo-com.svg" width={70} height={70} alt="reset" />
					</button>
				</div>
				<div className="w-1/4 flex justify-center">
					<button className="bg-blue-500 text-lg rounded-lg text-black p-2 ">
						<div>
							<span>Next {"->"}</span>
						</div>
					</button>
				</div>
			</div>
		</TimerContext.Provider>
	);
};

export default BottomBar;
