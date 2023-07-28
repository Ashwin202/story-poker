import TeamVoteSection from "@/components/TeamVoteSection";
import BottomBar from "@/components/BottomBar";
import TopBar from "@/components/TopBar";
import CardPickerContainer from "@/components/CardPickerContainer";
import SprintDetailsContainer from "@/components/SprintDetailsContainer";

const page = () => {
	const userData = [
		{ id: 1, firstName: "Ashok", lastName: "Mohanakumar", active: true, value: 1 },
		{ id: 2, firstName: "Michael", lastName: "Teddy", active: true, value: 0 },
		{ id: 3, firstName: "Steve", lastName: "Waltin", active: true, value: 0 },
		{ id: 4, firstName: "Shabeer", lastName: "Mohammed", active: false, value: 0 },
		{ id: 5, firstName: "Aswin", lastName: "M", active: false, value: 0 },
		{ id: 6, firstName: "Gopi", lastName: "Dutt", active: false, value: 0 },
		{ id: 6, firstName: "Nithin", lastName: "Prince", active: false, value: 0 },
	];

	const sprintData = [
		{
			SprintID: "RYNG-1801",
			SprintHeader: "SPIKE > Customer Entity1",
			Desription:
				"The customer is at the centre of conversations, and it is critical that we make Customer a primary entity within Ryng.Records\nCustomer records can be uploaded into the system through multiple places ",
		},
		{
			SprintID: "RYNG-1802",
			SprintHeader: "SPIKE > Customer Entity2",
			Desription:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		},
		{ SprintID: "RYNG-1803", SprintHeader: "SPIKE > Customer Entity3", Desription: "Desription3" },
		{ SprintID: "RYNG-1804", SprintHeader: "SPIKE > Customer Entity4", Desription: "Desription4" },
		{ SprintID: "RYNG-1805", SprintHeader: "SPIKE > Customer Entity5", Desription: "Desription5" },
	];

	return (
		<div className="flex h-screen flex-col">
			<div className=" w-full h-16">
				<TopBar />
			</div>
			<div className="flex w-full h-[calc(100%-12rem)] ">
				<div className="flex flex-col w-5/6 p-2 ">
					<div className="flex w-full dark:text-white text-black  h-1/2 ">
						<SprintDetailsContainer sprintData={sprintData[1]} />
					</div>
					<div className="flex flex-col w-full dark:text-white text-black h-1/2 ">
						<span className="flex flex-wrap justify-center content-center p-2 w-full text-2xl"> Please select One Card 👇</span>
						<CardPickerContainer />
					</div>
				</div>
				<div className="flex w-1/6 p-2">
					<TeamVoteSection userData={userData} />
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
