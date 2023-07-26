import React from "react";
import TeamVote from "@/components/TeamVote";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "./ui/avatar";

type PersonProps = {
	userdata: {
		id: number;
		firstName: string;
		lastName: string;
		active: boolean;
		value?: number;
	}[];
};

const TeamVoteSection = (props: PersonProps) => {
	return (
		<ScrollArea className="h-full w-full p-3 rounded-md border">
			{props.userdata.map((props, index) => (
				<>
					<div key={index} className="flex flex-row justify-between gap-3">
						<div className="flex flex-row justify-between gap-3">
							<TeamVote isActive={props.active}  firstName = {props.firstName} lastName = {props.lastName}/>
							<span>{props.firstName} {props.lastName}</span>
						</div>
						<span>{props.value !== 0 && props.value && <Badge>{props.value}</Badge>}</span>
					</div>
					<Separator className="my-2" />
				</>
			))}
		</ScrollArea>
	);
};

export default TeamVoteSection;
