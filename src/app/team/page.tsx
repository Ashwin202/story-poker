'use client'
import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { emitMessage } from "@/lib/emitMessage"

const TeamJoin: React.FC = () => {
	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<h1 className="mb-3 font-bold text-4xl">JOIN THE GAME</h1>
			<Input className="bg-gray-700 text-2xl  w-1/2 h-14 text-center uppercase" placeholder="Enter the code..." />
			<Button className="bg-green-500 my-4 w-1/1 hover:bg-blue-400">JOIN</Button>
		</div>
	);
};

export default TeamJoin;
