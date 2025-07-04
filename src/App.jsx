import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Flightresults from './components/Flightresults';
import PriceCharts from './components/PriceCharts';
import Featuresection from './components/Featuresection';
import Footers from './components/Footers';
import fare from './components/fare.jpg'; // ✅ Background image

export default function App() {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className="dark min-h-screen bg-cover bg-center bg-no-repeat text-black dark:text-white"
      style={{
        backgroundImage: `url(${fare})`,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backgroundBlendMode: "darken",
      }}
    >
      <Navbar />
      <main className="pt-20">

        {/* Search Flights Section */}
        <section id="search" className="scroll-section scroll-mt-28">
          <Hero onSearch={handleSearch} />
        </section>

        {/* Results Section */}
        {showResults && (
          <div id="results-section" className="scroll-section scroll-mt-28">
            <Flightresults />
          </div>
        )}

        {/* Price Predictions Section */}
        <section id="predictions" className="scroll-section scroll-mt-28">
          <PriceCharts />
        </section>

        {/* Set Price Alerts Section */}
        <section
          id="alerts"
          className="scroll-section scroll-mt-28 py-16 text-center bg-cover bg-center bg-no-repeat text-white rounded-md"
          style={{
            backgroundImage: `url(${fare})`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "darken",
            backdropFilter: "blur(6px)",
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Set Price Alerts</h2>
          <p className="text-gray-100">
            Get notified when your selected flights drop in price.
          </p>
        </section>

        {/* Feature Section */}
        <section id="insights" className="scroll-section scroll-mt-28 py-16 px-4 md:px-12 bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm rounded-md">
          <div className="max-w-7xl mx-auto">
            <Featuresection />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-section scroll-mt-28 py-20 px-6 md:px-20 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-sm text-white rounded-md">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-blue-400">FlightPredict</span>
              </h2>
              <p className="text-gray-200 mb-6 text-base leading-relaxed">
                FlightPredict uses artificial intelligence to analyze thousands of routes and price histories,
                helping you make smarter flight bookings. Our mission is to eliminate guesswork and save you money.
              </p>
              <ul className="space-y-2 text-sm text-gray-100 list-disc list-inside">
                <li>AI-driven price predictions with high accuracy</li>
                <li>Real-time tracking of airfare trends</li>
                <li>Coverage for global domestic and international routes</li>
                <li>Alerts and insights tailored to your travel needs</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="Flight Prediction AI"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footers />
    </div>
  );
}
