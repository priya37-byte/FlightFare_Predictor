import { useState } from "react";
import fare from "./fare.jpg";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const priceHistoryData = [
  { date: "Jan", price: 450, predicted: 420 },
  { date: "Feb", price: 380, predicted: 390 },
  { date: "Mar", price: 520, predicted: 510 },
  { date: "Apr", price: 340, predicted: 350 },
  { date: "May", price: 290, predicted: 285 },
  { date: "Jun", price: 410, predicted: 415 },
  { date: "Jul", price: 580, predicted: 575 },
  { date: "Aug", price: 620, predicted: 610 },
  { date: "Sep", price: 380, predicted: 385 },
  { date: "Oct", price: 320, predicted: 315 },
  { date: "Nov", price: 280, predicted: 290 },
  { date: "Dec", price: 450, predicted: 445 },
];

const weeklyTrendData = [
  { day: "Mon", price: 320, bookings: 85 },
  { day: "Tue", price: 280, bookings: 92 },
  { day: "Wed", price: 290, bookings: 88 },
  { day: "Thu", price: 310, bookings: 78 },
  { day: "Fri", price: 450, bookings: 65 },
  { day: "Sat", price: 520, bookings: 45 },
  { day: "Sun", price: 480, bookings: 55 },
];

const hourlyData = [
  { hour: "00:00", price: 320 },
  { hour: "04:00", price: 310 },
  { hour: "08:00", price: 340 },
  { hour: "12:00", price: 380 },
  { hour: "16:00", price: 420 },
  { hour: "20:00", price: 390 },
];

export default function PriceCharts() {
  const [tab, setTab] = useState("yearly");

  return (
    <section
      className="py-12 px-4 md:px-8 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${fare})`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">Price Analytics Dashboard</h2>
            <p className="text-gray-200 text-sm">Track trends and predictions for NYC → LAX</p>
          </div>
          <div className="flex gap-2">
            {["yearly", "weekly", "hourly"].map((value) => (
              <button
                key={value}
                onClick={() => setTab(value)}
                className={`px-4 py-2 rounded text-sm font-medium ${
                  tab === value ? "bg-blue-600 text-white" : "bg-white/20 border border-white text-white"
                }`}
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Yearly Tab */}
        {tab === "yearly" && (
          <div className="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-white mb-6">Yearly Price vs Prediction</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceHistoryData}>
                  <defs>
                    <linearGradient id="actual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="pred" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="date" stroke="#fff" />
                  <YAxis tickFormatter={(v) => `$${v}`} stroke="#fff" />
                  <Tooltip />
                  <Area dataKey="price" stroke="#3b82f6" fill="url(#actual)" strokeWidth={2} />
                  <Area
                    dataKey="predicted"
                    stroke="#10b981"
                    fill="url(#pred)"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Weekly Tab */}
        {tab === "weekly" && (
          <div className="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-white mb-6">Weekly Booking Trends</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="day" stroke="#fff" />
                  <YAxis yAxisId="left" tickFormatter={(v) => `$${v}`} stroke="#fff" />
                  <YAxis yAxisId="right" orientation="right" stroke="#fff" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="price" fill="#3b82f6" />
                  <Line yAxisId="right" dataKey="bookings" stroke="#10b981" strokeWidth={3} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Hourly Tab */}
        {tab === "hourly" && (
          <div className="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-white mb-6">Hourly Price Fluctuations</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="hour" stroke="#fff" />
                  <YAxis tickFormatter={(v) => `$${v}`} stroke="#fff" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
