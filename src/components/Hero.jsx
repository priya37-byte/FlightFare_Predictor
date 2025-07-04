import { useState } from "react";
import fare from "./fare.jpg"; // Make sure this image exists in the same folder

export default function Hero({ onSearch }) {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [fromCity, setFromCity] = useState("New York (NYC)");
  const [toCity, setToCity] = useState("Los Angeles (LAX)");

  const handleSearch = () => {
    if (onSearch) onSearch(); // Trigger callback if provided
  };

  return (
    <section
      id="search"
      className="py-20 px-6 bg-cover bg-center bg-no-repeat transition-colors duration-300"
      style={{
        backgroundImage: `url(${fare})`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="max-w-5xl mx-auto text-center text-white">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-200 bg-blue-800 rounded">
          AI-Powered Flight Price Predictions
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Predict Flight Prices
          <span className="block text-blue-300">Save Money on Travel</span>
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Our AI analyzes millions of data points to help you book flights at the perfect time.
        </p>

        {/* More transparent glass-style card */}
        <div className="bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md shadow-md p-6 rounded-lg text-left text-black dark:text-white">
          <div className="flex flex-wrap justify-between mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isRoundTrip}
                onChange={(e) => setIsRoundTrip(e.target.checked)}
              />
              Round Trip
            </label>
            <span className="text-blue-600 font-medium">AI Price Prediction</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs">From</label>
              <input
                type="text"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="w-full border px-4 py-2 rounded bg-zinc-50 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs">To</label>
              <input
                type="text"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="w-full border px-4 py-2 rounded bg-zinc-50 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs">Departure</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full border px-4 py-2 rounded bg-zinc-50 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            {isRoundTrip && (
              <div>
                <label className="text-xs">Return</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full border px-4 py-2 rounded bg-zinc-50 dark:bg-zinc-700 dark:text-white"
                />
              </div>
            )}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Predict & Find Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
