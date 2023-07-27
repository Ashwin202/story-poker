"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";

interface CardPickerContainerProps {}

const CardPickerContainer: React.FC<CardPickerContainerProps> = () => {
	const storyPoints: number[] = [0, 1, 3, 5, 7, 15];
	const bgColor: string[] = ["bg-tahiti-100", "bg-tahiti-200", "bg-tahiti-300", "bg-tahiti-400", "bg-tahiti-500", "bg-tahiti-600", "bg-tahiti-700"];

	const [clickedIndex, setClickedIndex] = useState<number | null>(null);

	const handleCardClick = (index: number) => {
		setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="flex flex-wrap justify-center content-center gap-8 p-2 h-full w-full">
			{storyPoints.map((story, index) => {
				const classString = `flex flex-wrap flex-col justify-center content-center  cursor-pointer select-none min-h-[70%] min-w-[10%] ${bgColor[index]} ${index === clickedIndex ? "transform -translate-y-10" : ""}`;
				return (
					<Card key={"card" + index} className={classString} onClick={() => handleCardClick(index)} style={{cursor:"pointer"}}>
						<div className="text-black text-[250%]">{story}</div>
					</Card>
				);
			})}
		</div>
	);
};

export default CardPickerContainer;
