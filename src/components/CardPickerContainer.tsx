"use client";
import React, { useState, useContext } from "react";
import { Card } from "./ui/card";
import { PollingContext } from "@/store/contexts/PollingContext";

interface CardPickerContainerProps {}

const CardPickerContainer: React.FC<CardPickerContainerProps> = () => {
	const storyPoints: number[] = [0, 1, 3, 5, 7, 15];
	const bgColor: string[] = ["bg-tahiti-100", "bg-tahiti-200", "bg-tahiti-300", "bg-tahiti-400", "bg-tahiti-500", "bg-tahiti-600", "bg-tahiti-700"];

	const contextValue = useContext(PollingContext);

	if (!contextValue) {
		return <div>Loading...</div>;
	}
	const { selectedCard, setSelectedCard } = contextValue;

	const handleCardClick = (story: number) => {
		setSelectedCard(story);
	};

	return (
		<div className="flex flex-wrap justify-center content-center gap-8 p-2 h-full w-full">
			{storyPoints.map((story, index) => {
				const classString = `flex flex-wrap flex-col justify-center content-center  cursor-pointer select-none min-h-[70%] min-w-[10%] ${bgColor[index]} ${story === selectedCard ? "transform -translate-y-10" : ""}`;
				return (
					<Card key={"card" + index} className={classString} onClick={() => handleCardClick(story)} style={{ cursor: "pointer" }}>
						<div className="text-black text-[250%]">{story}</div>
					</Card>
				);
			})}
		</div>
	);
};

export default CardPickerContainer;
