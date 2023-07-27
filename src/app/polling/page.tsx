import TeamVoteSection from "@/components/TeamVoteSection";
import BottomBar from "@/components/BottomBar";
import TopBar from "@/components/TopBar";
import CardPickerContainer from "@/components/CardPickerContainer";

const page = () => {
	const userdata = [
		{ id: 1, firstName: "Ashok", active: true, value: 1 },
		{ id: 2, firstName: "Michael", lastName: "Teddy", active: true, value: 0 },
		{ id: 3, firstName: "Steve", lastName: "Waltin", active: true, value: 0 },
		{ id: 4, firstName: "Shabeer", lastName: "Mohammed", active: false, value: 0 },
		{ id: 5, firstName: "Aswin", lastName: "M", active: false, value: 0 },
		{ id: 6, firstName: "Gopi", lastName: "Dutt", active: false, value: 0 },
		{ id: 6, firstName: "Nithin", lastName: "Prince", active: false, value: 0 },
	];
	return (
		<div className="flex h-screen flex-col">
			<div className=" w-full h-16">
				<TopBar />
			</div>
			<div className="flex w-full h-[calc(100%-12rem)] ">
				<div className="flex flex-col w-5/6 p-2 ">
					<div className="flex w-full dark:text-white text-black  h-1/2 ">SPRINT DETAILS</div>
					<div className="flex flex-col w-full dark:text-white text-black h-1/2 ">
						<span className="flex flex-wrap justify-center content-center p-2 w-full"> Please select One Card</span>
						<CardPickerContainer />
					</div>
				</div>
				<div className="flex w-1/6 p-2">
					<TeamVoteSection userdata={userdata} />
				</div>
			</div>

			<div className="flex flex-wrap justify-center content-center w-full h-32 p-2 ">
				<div className="content-center w-1/2 h-1/2">
					<BottomBar />
				</div>
			</div>
		</div>
	);
};

export default page;
