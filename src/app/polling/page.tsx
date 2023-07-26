import TeamVoteSection from "@/components/TeamVoteSection";

const page = () => {
	const userdata = [
		{ id: 1, firstName: "Ashok", lastName: "Mohanakumar", active: true, value: 1 },
		{ id: 2, firstName: "Michael", lastName: "Teddy", active: true, value: 0 },
		{ id: 3, firstName: "Steve", lastName: "Waltin", active: true, value: 0 },
		{ id: 4, firstName: "Shabeer", lastName: "Mohammed", active: false, value: 0 },
		{ id: 5, firstName: "Aswin", lastName: "M", active: false, value: 0 },
		{ id: 6, firstName: "Gopi", lastName: "Dutt", active: false, value: 0 },
		{ id: 6, firstName: "Nithin", lastName: "Prince", active: false, value: 0 },
	];
	return (
		<div className="flex h-screen flex-col" style={{ border: "1px solid green" }}>
			<div className=" w-full h-1/6 bg-red-300 p-2" >
				Top
			</div>
			<div className="flex w-full h-4/6 ">
				<div className="flex w-5/6 bg-blue-300 p-2 ">Middle</div>
				<div className="flex w-1/6 p-2">
					<TeamVoteSection userdata={userdata} />
				</div>
			</div>

			<div className="w-full h-1/6 bg-gray-300 p-2" >Bottoms</div>
		</div>
	);
};

export default page;
