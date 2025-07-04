import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Search Flights", href: "#search" },
    { name: "Price Predictions", href: "#predictions" },
    { name: "Price Alerts", href: "#alerts" },
    { name: "Travel Insights", href: "#insights" },
    { name: "About", href: "#about" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close on mobile
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-100 dark:bg-zinc-900 shadow border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white px-2 py-1 rounded-md font-bold">✈️</div>
          <div className="leading-tight">
            <span className="text-xl font-bold text-blue-700 dark:text-blue-400">FlightPredict</span>
            <p className="text-xs text-gray-600 dark:text-gray-400 -mt-1">AI-Powered Travel</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-700 dark:text-white"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-zinc-100 dark:bg-zinc-900">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
