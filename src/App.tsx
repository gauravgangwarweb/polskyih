import Leaderboard from "./components/Leaderboard"
import Players from "./components/Players"
import Timer from "./components/Timer"

function App() {
  return (
    <div className="px-6 py-8">
      <h4 className="text-[#6151DC] text-base font-semibold text-center">Time Left</h4>
      <Timer />
      <Players />
      <Leaderboard />
    </div>
  )
}

export default App
