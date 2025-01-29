// // // pages/index.js

// 'use client';
// // import { useState } from "react";

// // export default function Home() {
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const handleCollectAsset = async () => {
// //     setLoading(true);
// //     setMessage("");

// //     try {
// //       // Here, we simulate collecting an asset (e.g., minting an NFT)
// //       const response = await fetch("/api/mintAsset", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           playerAddress: "player-wallet-address", // Use a default address or pass from the UI
// //           assetId: Date.now(), // Use a unique asset ID (could be random or based on gameplay)
// //         }),
// //       });

// //       const result = await response.json();
// //       if (result.success) {
// //         setMessage("Asset collected successfully!");
// //       } else {
// //         setMessage("Error collecting asset");
// //       }
// //     } catch (error) {
// //       setMessage("Error occurred while collecting asset.");
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>Welcome to the Blockchain Game!</h1>
// //       <p>Click below to collect your NFT asset.</p>
// //       <button onClick={handleCollectAsset} disabled={loading}>
// //         {loading ? "Collecting..." : "Collect Asset"}
// //       </button>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // }


// // pages/index.js
// import Navbar from "./components/Navbar";
// import MiningGame from "./components/ MiningGame";

// export default function Home() {
//   return (
//     <div>
      
//       <MiningGame />
//     </div>
//   );
// }


import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Blockchain Miner!
        </h1>
        <p className="text-xl mb-6">
          Start mining tokens and build your blockchain empire. Mine, upgrade,
          and dominate the blockchain world!
        </p>
        <Link href="/game" className="bg-blue-600 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-500 transition duration-200">
            Start Mining
        </Link>
      </div>

      {/* Game Stats / Progress */}
      <div className="flex space-x-8 mb-12">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Tokens Mined</h3>
          <p className="text-3xl">0</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Mining Power</h3>
          <p className="text-3xl">0</p>
        </div>
      </div>

      {/* About and Contact Links */}
      <div className="mt-12 text-center">
        <Link href="/about" className="text-gray-400 hover:text-gray-200 text-lg mr-4">
            Learn More About the Game
        </Link>
        <Link href="/contact" className="text-gray-400 hover:text-gray-200 text-lg">
            Contact Support
        </Link>
      </div>
    </div>
  );
};

export default Home;
