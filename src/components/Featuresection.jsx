"use client"

import {
  Brain,
  DollarSign,
  Bell,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Target,
  Clock,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import fare from "./fare.jpg"; // make sure path is correct

export default function FeatureSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Predictions",
      description: "Analyzes price history, trends, and demand to predict fare changes accurately.",
    },
    {
      icon: DollarSign,
      title: "Save More",
      description: "Get smarter recommendations on when to book to maximize savings.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified when prices drop or when it's the best time to book.",
    },
    {
      icon: Shield,
      title: "Price Protection",
      description: "Make confident decisions backed by consistent and reliable prediction models.",
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "We keep track of route prices 24/7 to keep you ahead of the market.",
    },
    {
      icon: Globe,
      title: "Global Routes",
      description: "Supports thousands of routes including international and domestic destinations.",
    },
  ];

  const stats = [
    { icon: BarChart3, number: "10M+", label: "Flights Analyzed" },
    { icon: Target, number: "95.2%", label: "Prediction Accuracy" },
    { icon: DollarSign, number: "$127", label: "Avg. Savings" },
    { icon: Clock, number: "24/7", label: "Monitoring" },
  ];

  const handlePredictClick = () => {
    const section = document.getElementById("search");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMoreClick = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat text-white py-20 px-6"
      style={{
        backgroundImage: `url(${fare})`,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Flight Fare Prediction</h2>
          <p className="text-zinc-200 max-w-xl mx-auto text-lg">
            An AI-powered project that helps users make smarter booking decisions through prediction and analysis.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-semibold text-white">{stat.number}</div>
              <div className="text-zinc-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-zinc-200 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white/20 backdrop-blur-sm p-10 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Save on Flights?</h3>
            <p className="text-zinc-200 mb-6">
              Try our fare prediction tool and make data-driven decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={handlePredictClick} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center w-full sm:w-auto">
                <TrendingUp className="w-5 h-5 mr-2" />
                Predict Prices
              </button>
              <button onClick={handleLearnMoreClick} className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-zinc-900 transition-all w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



