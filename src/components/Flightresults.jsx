import { useState } from "react"

const flightResults = [
  {
    id: 1,
    airline: "Delta Airlines",
    flightNumber: "DL 1234",
    departure: "08:30",
    arrival: "14:45",
    duration: "6h 15m",
    stops: 0,
    stopDetails: [],
    currentPrice: 342,
    predictedPrice: 298,
    confidence: 87,
    recommendation: "Wait",
    savings: 44,
    priceChange: -12.8,
    baggage: "1 carry-on, 1 checked bag",
  },
  {
    id: 2,
    airline: "American Airlines",
    flightNumber: "AA 5678",
    departure: "11:20",
    arrival: "17:55",
    duration: "6h 35m",
    stops: 1,
    stopDetails: [{ airport: "ATL", duration: "1h 15m" }],
    currentPrice: 289,
    predictedPrice: 315,
    confidence: 92,
    recommendation: "Book Now",
    savings: -26,
    priceChange: 8.5,
    baggage: "1 carry-on, 1 checked bag",
  },
  {
    id: 3,
    airline: "United Airlines",
    flightNumber: "UA 9012",
    departure: "15:10",
    arrival: "21:30",
    duration: "6h 20m",
    stops: 0,
    stopDetails: [],
    currentPrice: 398,
    predictedPrice: 365,
    confidence: 78,
    recommendation: "Wait",
    savings: 33,
    priceChange: -5.2,
    baggage: "1 carry-on, 1 checked bag",
  },
]

export default function FlightResults() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Flight Results</h2>
      <div className="space-y-6">
        {flightResults.map((flight) => (
          <div key={flight.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold text-lg">{flight.airline}</h3>
                <p className="text-sm text-gray-500">{flight.flightNumber}</p>
              </div>
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {flight.recommendation}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold">{flight.departure} → {flight.arrival}</p>
                <p className="text-sm text-gray-600">Duration: {flight.duration}</p>
                <p className="text-sm text-gray-600">Stops: {flight.stops}</p>
                {flight.stops > 0 && (
                  <p className="text-sm text-orange-600">
                    Layover: {flight.stopDetails[0].duration} at {flight.stopDetails[0].airport}
                  </p>
                )}
              </div>
              <div>
                <p className="text-sm">Current: <span className="font-bold">${flight.currentPrice}</span></p>
                <p className="text-sm">Predicted: <span className="font-bold">${flight.predictedPrice}</span></p>
                <p className="text-sm text-gray-600">Confidence: {flight.confidence}%</p>
                <p className={`text-sm ${flight.priceChange > 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {flight.priceChange > 0 ? '+' : ''}{flight.priceChange}% in 7 days
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-blue-600 mb-1">${flight.currentPrice}</p>
                <p className="text-sm text-gray-500 mb-2">{flight.baggage}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm w-full">
                  {flight.recommendation === "Book Now" ? "Book Now" : "View Deal"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
