import fare from "./fare.jpg"; // Adjust the path based on where your image is located

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat border-t border-gray-200 dark:border-zinc-700 py-12 mt-20 text-white"
      style={{
        backgroundImage: `url(${fare})`,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white mb-4">
          Subscribe to Our Newsletter
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-white/30 rounded-md w-full sm:w-64 bg-white/20 text-white placeholder-white/70"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>

        <p className="text-sm text-gray-200 mb-4">
          &copy; {new Date().getFullYear()} FlightPredict. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
