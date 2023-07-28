import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Card } from "./ui/card";

type SprintProps = {
	sprintData: {
		SprintID: string;
		SprintHeader: string;
		Desription?: String;
	};
};

const SprintDetailsContainer: React.FC<SprintProps> = ({ sprintData }) => {
	return (
		<Card>
			<div className="h-full w-full flex flex-col justify-center content-between p-2 pl-8  gap-3 ">
				<div className="flex flex-wrap content-center font-bold text-xl dark:text-[#a3e635] text-black">{sprintData.SprintID}</div>
				<div className="flex flex-wrap content-center text-lg pl-8 dark:text-[#38bdf8] text-black">{sprintData.SprintHeader}</div>
				<ScrollArea className="h-full w-full p-3 text-lg pl-10 rounded-md border">
					<div className="flex flex-wrap content-center">{sprintData.Desription}</div>
				</ScrollArea>
			</div>
		</Card>
	);
};

export default SprintDetailsContainer;
