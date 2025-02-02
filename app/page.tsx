import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen py-12 px-6">
      {/* Hero Section with Background Image */}
      <div className="relative w-full mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Welcome to Blockchain Miner
          </h1>
          <p className="text-2xl mb-6 max-w-xl mx-auto">
            Mine tokens, upgrade your tools, and dominate the blockchain world.
            Build your mining empire and become a blockchain tycoon!
          </p>
          <Link
            href="/game"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-10 rounded-full text-2xl hover:from-blue-400 hover:to-purple-500 transition duration-300 transform hover:scale-105"
          >
            Start Mining
          </Link>
        </div>
      </div>

      {/* Game Stats / Progress with Circular Progress Bars */}
      <div className="flex space-x-8 mb-12 justify-center w-full">
        <div className="bg-gray-700 p-8 rounded-full shadow-xl text-center w-1/3">
          <h3 className="text-xl font-semibold mb-2">Tokens Mined</h3>
          <div className="text-3xl">0</div>
          <div className="mt-4 text-sm text-gray-400">
            Earn tokens to upgrade
          </div>
        </div>
        <div className="bg-gray-700 p-8 rounded-full shadow-xl text-center w-1/3">
          <h3 className="text-xl font-semibold mb-2">Mining Power</h3>
          <div className="text-3xl">0</div>
          <div className="mt-4 text-sm text-gray-400">
            Increase power with tools
          </div>
        </div>
      </div>

      {/* Game Features Section with Hover Effects */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-6">
          Why Play Blockchain Miner?
        </h2>
        <p className="text-xl mb-8">
          Experience the thrill of decentralized blockchain gaming. Upgrade your
          mining tools, earn rewards, and climb the leaderboard. Here's why you
          should join:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-blue-800 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Upgrades & Tools</h3>
            <p className="text-lg">
              Boost your mining power and unlock advanced tools to dominate the
              blockchain.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-blue-800 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
            <p className="text-lg">
              Unlock achievements as you progress through the game and rise up
              the leaderboard.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-blue-800 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Daily Rewards</h3>
            <p className="text-lg">
              Keep mining every day to claim your daily rewards and boost your
              progress.
            </p>
          </div>
        </div>
      </div>

      {/* About Section with Full-width Image */}
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl mb-12 w-full max-w-4xl">
        <h1 className="text-4xl font-semibold text-center mb-6">
          About Blockchain Miner
        </h1>
        <p className="text-xl mb-6">
          Blockchain Miner is an immersive game that lets you mine tokens,
          upgrade tools, and build your mining empire in a simulated blockchain
          world. Start from the basics and unlock a variety of tools to increase
          your mining power.
        </p>
        <div className="text-center mb-6">
          <Link
            href="/about"
            className="text-blue-400 hover:text-blue-500 text-lg"
          >
            Learn More About the Game
          </Link>
        </div>
      </div>

      {/* Competitive Reviews / Social Proof Section */}
      <div className="bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-800 text-white p-12 mb-12 w-full">
        <h2 className="text-4xl font-semibold mb-6 text-center">
          What Players Say
        </h2>
        <div className="flex space-x-8 justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs text-center">
            <p className="text-lg italic">
              "Blockchain Miner is the most exciting and addictive game I've
              played! I can't stop upgrading my tools!"
            </p>
            <p className="font-semibold mt-4">- Alex P.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs text-center">
            <p className="text-lg italic">
              "The thrill of mining and collecting rewards is unmatched. Plus,
              the daily challenges keep me coming back!"
            </p>
            <p className="font-semibold mt-4">- Sarah M.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 py-6 mt-12">
        <div className="flex justify-center space-x-8 text-gray-400">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
        </div>
        <p className="text-center text-sm mt-4 text-gray-500">
          © 2025 Blockchain Miner. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
