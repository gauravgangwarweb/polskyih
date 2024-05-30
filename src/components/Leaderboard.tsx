interface LeaderboardProps {
    // Define any props you need for the component here
}

const Leaderboard: React.FC<LeaderboardProps> = ({}) => {
   return (
        <div className="mt-8">
            <h3 className="text-[#6151DC] text-xl font-semibold text-center">Leaderboard</h3>
            <hr className="bg-[#6151DC] mt-4" />
            <table className="table-auto border-collapse w-full mt-4">
                <thead>
                    <tr>
                        <th className="text-[13px] font-normal text-start">Rank</th>
                        <th className="text-[13px] font-normal text-start">Name</th>
                        <th className="text-[13px] font-normal text-end">Gift</th>
                        <th className="text-[13px] font-normal text-end">Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="mt-6">
                        <td className="text-[#6151DC] text-[15px] font-medium text-start pt-2">{1}.</td>
                        <td className="flex gap-2 items-center text-[15px] font-medium text-start pt-2">
                            <img className="w-6 h-6" src={"John.png"} alt="john" />
                            <p>John Doe</p>
                        </td>
                        <td className="text-[15px] font-normal text-end pt-2">🌹</td>
                        <td className="text-[#6151DC] text-[15px] font-medium text-end pt-2">250</td>
                    </tr>
                    <tr className="mt-6">
                        <td className="text-[#6151DC] text-[15px] font-medium text-start pt-4">{1}.</td>
                        <td className="flex gap-2 items-center text-[15px] font-medium text-start pt-4">
                            <img className="w-6 h-6" src={"John.png"} alt="john" />
                            <p>John Doe</p>
                        </td>
                        <td className="text-[15px] font-normal text-end pt-4">🌹</td>
                        <td className="text-[#6151DC] text-[15px] font-medium text-end pt-4">250</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;