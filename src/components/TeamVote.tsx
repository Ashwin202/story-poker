"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import TwoLetterWord from "./TwoLetterWord";

interface TeamVoteProps {
	isActive: boolean;
	firstName: string;
	lastName?: string;
}
const TeamVote = (props: TeamVoteProps) => {
	return (
		<>
			<Avatar className={`border-4 h-10 w-10  ${props.isActive ? "border-green-600" : "border-gray-600"}`}>
				{/* <AvatarImage  src="https://github.com/shadcn.png" /> */}
				<AvatarFallback>
					<TwoLetterWord firstName={props.firstName} lastName={props.lastName} />
				</AvatarFallback>
			</Avatar>
		</>
	);
};

export default TeamVote;
