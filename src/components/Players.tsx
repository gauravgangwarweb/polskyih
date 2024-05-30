import { useState } from "react";

interface PlayersProps {
    // Define any props you need for the component here
}

const Players: React.FC<PlayersProps> = ({}) => {
  const [progress, setProgress] = useState<number>(55);
  return (
    <div className="mt-8">
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-[100px] h-[100px] rounded-full border-2 border-[#6151DC66]/40"
            src={"messi.jpeg"}
            alt={"player-image"}
          />
          <h5 className="text-center text-[15px] font-medium mt-2">
            {"Leonel Messi"}
          </h5>
          <p className="text-sm text-[#0D0723]">#{"mes"}</p>
        </div>
        <div className="flex justify-center">
          <h5 className="text-3xl font-semibold mt-8">Vs</h5>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-[100px] h-[100px] rounded-full border-2 border-[#6151DC66]/40"
            src={"messi.jpeg"}
            alt={"player-image"}
          />
          <h5 className="text-center text-[15px] font-medium mt-2">
            {"Leonel Messi"}
          </h5>
          <p className="text-sm text-[#0D0723]">#{"mes"}</p>
        </div>
      </div>
      <div className="mt-8 px-2">
        <div className="flex justify-between">
          <p className="text-sm font-semibold">{progress}%</p>
          <p className="text-sm font-semibold">{100 - progress}%</p>
        </div>
        <progress className="progress-bar w-full mt-2 border border-[#6151dc] p-0.5" value={progress} max={100} />
      </div>
    </div>
  );
};

export default Players;
