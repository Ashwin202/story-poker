import BottomBar from "@/components/BottomBar";

const page = () => {
    return (
            <div>
                <div className="absolute inset-x-0 top-0 h-24 ...">Top</div>
                <div className="absolute inset-y-0 right-0 w-16 ...">Right</div>
                <div className="absolute inset-x-0 bottom-0 h-28 ...">
                    <BottomBar/>
                </div>
            </div>
    );
};

export default page