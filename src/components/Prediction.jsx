import { useState } from "react"
import { ArrowDown, Bell } from "lucide-react"

export default function PredictionDashboard() {
  const [selectedRoute] = useState("NYC → LAX")
  const currentPrice = 342
  const predictedPrice = 298
  const confidence = 87
  const savings = currentPrice - predictedPrice

  const predictionData = [
    { day: "Today", predicted: 342 },
    { day: "Tomorrow", predicted: 338 },
    { day: "Day 3", predicted: 335 },
    { day: "Day 4", predicted: 328 },
    { day: "Day 5", predicted: 322 },
    { day: "Day 6", predicted: 318 },
    { day: "Day 7", predicted: 315 },
    { day: "Day 8", predicted: 298 },
    { day: "Day 9", predicted: 295 },
    { day: "Day 10", predicted: 292 },
  ]

  const lowestPrice = Math.min(...predictionData.map((d) => d.predicted))
  const lowestDay = predictionData.find((d) => d.predicted === lowestPrice)?.day || "N/A"

  return (
    <section className="py-12 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">AI Price Prediction Dashboard</h2>
          <p className="text-gray-400">
            Forecast for <span className="font-semibold text-white">{selectedRoute}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Forecast Chart */}
          <div className="md:col-span-2 bg-zinc-900 rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">10-Day Price Trend</h3>
              <span className="text-sm bg-green-900 text-green-400 px-3 py-1 rounded-full">
                {confidence}% Confidence
              </span>
            </div>

            <ul className="space-y-3 text-sm text-gray-300 max-h-96 overflow-y-auto pr-2">
              {predictionData.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-zinc-700 pb-2">
                  <span>{item.day}</span>
                  <span className="text-green-400 font-semibold">${item.predicted}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-5 rounded-xl text-center">
                <p className="text-sm text-gray-400">Lowest Price</p>
                <p className="text-3xl font-bold text-green-400">${lowestPrice}</p>
                <p className="text-xs text-gray-500">Expected on {lowestDay}</p>
              </div>
              <div className="bg-zinc-800 p-5 rounded-xl text-center">
                <p className="text-sm text-gray-400">You Could Save</p>
                <p className="text-3xl font-bold text-yellow-400">${savings}</p>
                <p className="text-xs text-gray-500">
                  {((savings / currentPrice) * 100).toFixed(1)}% Cheaper than Current
                </p>
              </div>
            </div>
          </div>

          {/* Right: Suggestion Box */}
          <div className="bg-zinc-900 rounded-xl p-6 space-y-5 shadow-xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Recommendation</h3>
              <p className="text-sm text-gray-400">
                Our AI recommends waiting. Price expected to drop to around
                <span className="text-green-400 font-semibold"> ${predictedPrice}</span>
              </p>
            </div>

            <div className="bg-green-900 p-5 rounded-xl text-center">
              <p className="text-2xl font-bold text-green-300">Day 8 – Day 10</p>
              <p className="text-sm text-green-400">Best Time to Book</p>
            </div>

            <div className="text-sm space-y-1 text-gray-400">
              <p>Expected Price Range: <span className="text-green-300 font-medium">$292 – $298</span></p>
              <p>Potential Savings: <span className="text-yellow-300 font-medium">$44 – $50</span></p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition duration-300">
              <Bell className="w-4 h-4" /> Set Price Alert
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-700 hover:border-white text-gray-300 hover:text-white rounded-lg text-sm font-medium transition duration-300">
              <ArrowDown className="w-4 h-4" /> Download Forecast
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
