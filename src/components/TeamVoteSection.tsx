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
		lastName?: string;
		active: boolean;
		value?: number;
	}[];
};

const TeamVoteSection = (props: PersonProps) => {
	return (
		<ScrollArea className="h-full w-full p-3 rounded-md border">
			{props.userdata.map((props, index) => (
				<>
					<div key={index} className="flex flex-row justify-between content-center gap-3 text-xs">
						<div className="flex justify-center content-between gap-3 ">
							<TeamVote isActive={props.active} firstName={props.firstName} lastName={props.lastName ? props.lastName : undefined} />
							<div className="flex flex-wrap content-center">
								{props.firstName} {props.lastName}
							</div>
						</div>
						<div className="flex flex-wrap content-center">{props.value !== 0 && props.value && <Badge className="text-sm">{props.value}</Badge>}</div>
					</div>
					<Separator className="my-2" />
				</>
			))}
		</ScrollArea>
	);
};

export default TeamVoteSection;
