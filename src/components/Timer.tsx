interface TimerProps {
    // Define any props you need for the component here
}

const Timer: React.FC<TimerProps> = ({}) => {
    return (
        <div className="mt-4 bg-[#6151DC] text-white flex justify-between items-center py-4 px-7 rounded-xl">
            <div className="flex flex-col items-center">
                <p className="text-3xl font-semibold">{"02"}</p>
                <p className="text-xs">Days</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-3xl font-semibold">{"11"}</p>
                <p className="text-xs">Hours</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-3xl font-semibold">{"44"}</p>
                <p className="text-xs">Minutes</p>
            </div>
        </div>
    );
};

export default Timer;