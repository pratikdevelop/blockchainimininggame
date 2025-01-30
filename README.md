This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



// // // import { useState, useEffect } from "react";
// // // import { ethers } from "ethers";

// // // const MiningGame = (miningPower1, setTokensMined) => {
// // //   const [miningPower, setMiningPower] = useState(miningPower1);
// // //   const [miningProgress, setMiningProgress] = useState(0);
// // //   const [minedTokens, setMinedTokens] = useState(0);
// // //   const [balance, setBalance] = useState(0);
// // //   const [isMining, setIsMining] = useState(false);
// // //   const [walletAddress, setWalletAddress] = useState("");
// // //   const [tokenContract, setTokenContract] = useState(null); // ERC-20 contract
// // //   const [autoMining, setAutoMining] = useState(false);

// // //   const [miningTools, setMiningTools] = useState([
// // //     { name: "Pickaxe", cost: 50, power: 2 },
// // //     { name: "Advanced Drill", cost: 200, power: 5 },
// // //     { name: "Laser Cutter", cost: 1000, power: 15 },
// // //   ]);
// // //   const [autoMinerCost, setAutoMinerCost] = useState(500);
// // //   const [achievement, setAchievement] = useState("");

// // //   // Connect to wallet using MetaMask
// // //   const connectWallet = async () => {
// // //     if (window.ethereum) {
// // //       const provider = new ethers.BrowserProvider(window.ethereum);
// // //       const signer = await provider.getSigner();
// // //       const address = await signer.getAddress();
// // //       setWalletAddress(address);

// // //       const tokenAddress = "0xYourTokenContractAddress"; // Replace with your token contract address
// // //       const tokenABI = [
// // //         // ERC-20 ABI: simple transfer and balanceOf methods
// // //         "function balanceOf(address) view returns (uint256)",
// // //         "function transfer(address recipient, uint256 amount) public returns (bool)",
// // //       ];

// // //       const contract = new ethers.Contract(tokenAddress, tokenABI, signer);
// // //       setTokenContract(contract);

// // //       console.log("Wallet connected:", address);
// // //     } else {
// // //       alert("Please install MetaMask");
// // //     }
// // //   };

// // //   // Get balance from the connected wallet
// // //   const getWalletBalance = async () => {
// // //     if (tokenContract) {
// // //       const balance = await tokenContract.balanceOf(walletAddress);
// // //       setBalance(ethers.formatEther(balance)); // Convert from wei to ether
// // //     }
// // //   };

// // //   // Transfer mined tokens to the wallet
// // //   const transferTokens = async (amount) => {
// // //     if (tokenContract && walletAddress) {
// // //       const amountInWei = ethers.parseEther(amount.toString()); // Convert amount to wei
// // //       try {
// // //         const tx = await tokenContract.transfer(walletAddress, amountInWei);
// // //         await tx.wait();
// // //         console.log(`Transferred ${amount} tokens`);
// // //       } catch (error) {
// // //         console.error("Error transferring tokens:", error);
// // //       }
// // //     }
// // //   };

// // //   // Mining Simulation
// // //   useEffect(() => {
// // //     let miningInterval;

// // //     if (isMining) {
// // //       miningInterval = setInterval(() => {
// // //         setMiningProgress((prevProgress) => {
// // //           const newProgress = prevProgress + miningPower;
// // //           if (newProgress >= 100) {
// // //             setMinedTokens((prevTokens) => prevTokens + 1);
// // //             setTokensMined(minedTokens);
// // //             setBalance((prevBalance) => prevBalance + 10);
// // //             setMiningProgress(0); // Reset progress after a token is mined
// // //             if (minedTokens >= 10) {
// // //               transferTokens(minedTokens); // Transfer tokens to wallet when mined tokens reach a certain limit
// // //             }
// // //           }
// // //           return newProgress;
// // //         });
// // //       }, 1000); // Mining happens every second
// // //     } else {
// // //       clearInterval(miningInterval);
// // //     }

// // //     return () => {
// // //       clearInterval(miningInterval);
// // //     };
// // //   }, [isMining, miningPower, minedTokens, tokenContract]);

// // //   const startMining = () => {
// // //     if (miningPower <= 0 || miningProgress >= 100) return;
// // //     setIsMining(true);
// // //   };

// // //   const stopMining = () => {
// // //     setIsMining(false);
// // //   };

// // //   const increaseMiningPower = () => {
// // //     if (balance >= 10) {
// // //       setMiningPower(miningPower + 1);
// // //       setBalance(balance - 10);
// // //     }
// // //   };

// // //   const purchaseMiningTool = (tool) => {
// // //     if (balance >= tool.cost) {
// // //       setMiningPower(miningPower + tool.power);
// // //       setBalance(balance - tool.cost);
// // //       setAchievement(`Purchased ${tool.name}`);
// // //     } else {
// // //       alert("Not enough balance!");
// // //     }
// // //   };

// // //   const buyAutoMiner = () => {
// // //     if (balance >= autoMinerCost) {
// // //       setAutoMining(true);
// // //       setBalance(balance - autoMinerCost);
// // //       setAchievement("Auto Miner Activated!");
// // //     } else {
// // //       alert("Not enough balance to purchase Auto Miner");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen py-12 px-6">
// // //       <h1 className="text-4xl font-semibold mb-6">Blockchain Mining Game</h1>

// // //       <div className="w-full max-w-lg p-6 bg-gray-700 rounded-xl shadow-lg space-y-6">
// // //         <div className="text-center space-y-2">
// // //           <p className="text-lg">Mining Progress: {miningProgress}%</p>
// // //           <div className="w-full bg-gray-600 rounded-full h-4">
// // //             <div
// // //               className="bg-green-500 h-4 rounded-full"
// // //               style={{ width: `${miningProgress}%` }}
// // //             ></div>
// // //           </div>
// // //         </div>

// // //         <div className="flex justify-between items-center">
// // //           <button
// // //             className="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-500"
// // //             onClick={startMining}
// // //             disabled={isMining || miningPower <= 0}
// // //           >
// // //             Start Mining
// // //           </button>
// // //           <button
// // //             className="bg-red-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-500"
// // //             onClick={stopMining}
// // //             disabled={!isMining}
// // //           >
// // //             Stop Mining
// // //           </button>
// // //         </div>

// // //         <div className="mt-6 flex justify-between items-center">
// // //           <p className="text-lg">Mined Tokens: {minedTokens}</p>
// // //           <button
// // //             className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
// // //             onClick={increaseMiningPower}
// // //             disabled={balance < 10}
// // //           >
// // //             Increase Power (+1) - Cost: 10
// // //           </button>
// // //         </div>

// // //         <div className="mt-6">
// // //           <h2 className="text-xl font-semibold mb-4">Mining Tools</h2>
// // //           <div className="space-y-4">
// // //             {miningTools.map((tool) => (
// // //               <div
// // //                 key={tool.name}
// // //                 className="flex justify-between items-center"
// // //               >
// // //                 <p>
// // //                   {tool.name} - Power: {tool.power} - Cost: {tool.cost}
// // //                 </p>
// // //                 <button
// // //                   className="bg-green-500 text-white py-2 px-4 rounded-lg"
// // //                   onClick={() => purchaseMiningTool(tool)}
// // //                 >
// // //                   Purchase
// // //                 </button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="mt-6 text-center">
// // //           <h2 className="text-lg font-semibold">Balance: {balance}</h2>
// // //           <button
// // //             className="bg-purple-500 text-white py-2 px-4 rounded-lg mt-2"
// // //             onClick={buyAutoMiner}
// // //             disabled={autoMining || balance < autoMinerCost}
// // //           >
// // //             Buy Auto Miner - Cost: {autoMinerCost}
// // //           </button>
// // //         </div>

// // //         {achievement && (
// // //           <div className="mt-4 text-center text-green-400">
// // //             <p>{achievement}</p>
// // //           </div>
// // //         )}
// // //       </div>

// // //       <div className="mt-8 text-center text-sm text-gray-400">
// // //         <p>Blockchain Mining Game v1.0</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MiningGame;


// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // 'use client';
// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { ethers } from "ethers";

// // const MiningGame = () => {
// //   const [miningPower, setMiningPower] = useState(1);
// //   const [tokensMined, setTokensMined] = useState(0);
// //   const [balance, setBalance] = useState(0);
// //   const [energy, setEnergy] = useState(100); // New energy system
// //   const [isMining, setIsMining] = useState(false);
// //   const [achievements, setAchievements] = useState([]);
// //   const [leaderboard] = useState([]);
// //   const [walletAddress, setWalletAddress] = useState("");
// //   const [darkMode, setDarkMode] = useState(true); // Dark mode toggle

// //   const miningTools = [
// //     { name: "Pickaxe", cost: 50, power: 2 },
// //     { name: "Advanced Drill", cost: 200, power: 5 },
// //     { name: "Laser Cutter", cost: 1000, power: 15 },
// //   ];

// //   const connectWallet = async () => {
// //     if (window.ethereum) {
// //       const provider = new ethers.BrowserProvider(window.ethereum);
// //       const signer = await provider.getSigner();
// //       const address = await signer.getAddress();
// //       setWalletAddress(address);
// //       console.log("Wallet connected:", address);
// //     } else {
// //       alert("Please install MetaMask");
// //     }
// //   };

// //   useEffect(() => {
// //     const regenEnergy = setInterval(() => {
// //       setEnergy((prev) => Math.min(prev + 5, 100)); // Regenerate energy over time
// //     }, 5000);
// //     return () => clearInterval(regenEnergy);
// //   }, []);

// //   const startMining = () => {
// //     if (energy <= 0) return alert("Not enough energy to mine!");
// //     setIsMining(true);
// //   };

// //   const stopMining = () => {
// //     setIsMining(false);
// //   };

// //   useEffect(() => {
// //     let miningInterval;
// //     if (isMining) {
// //       miningInterval = setInterval(() => {
// //         setTokensMined((prev) => prev + miningPower);
// //         setBalance((prev) => prev + 10);
// //         setEnergy((prev) => Math.max(prev - 10, 0)); // Reduce energy
// //         checkAchievements(tokensMined + miningPower);
// //       }, 1000);
// //     } else {
// //       clearInterval(miningInterval);
// //     }
// //     return () => clearInterval(miningInterval);
// //   }, [isMining, miningPower, tokensMined]);

// //   const checkAchievements = (totalMined) => {
// //     const newAchievements = [];
// //     if (totalMined >= 100 && !achievements.includes("Century Miner")) {
// //       newAchievements.push("Century Miner");
// //     }
// //     if (totalMined >= 500 && !achievements.includes("Halfway to the Moon")) {
// //       newAchievements.push("Halfway to the Moon");
// //     }
// //     setAchievements((prev) => [...prev, ...newAchievements]);
// //   };

// //   // const updateLeaderboard = () => {
// //   //   const newEntry = { wallet: walletAddress, tokens: tokensMined };
// //   //   const updatedLeaderboard = [...leaderboard, newEntry].sort(
// //   //     (a, b) => b.tokens - a.tokens
// //   //   );
// //   //   setLeaderboard(updatedLeaderboard.slice(0, 10));
// //   // };

// //   const purchaseMiningTool = (tool) => {
// //     if (balance >= tool.cost) {
// //       setMiningPower(miningPower + tool.power);
// //       setBalance(balance - tool.cost);
// //     } else {
// //       alert("Not enough balance!");
// //     }
// //   };

// //   const toggleDarkMode = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   return (
// //     <div className={`flex flex-col items-center min-h-screen py-12 px-6 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
// //       <button
// //         onClick={toggleDarkMode}
// //         className="absolute top-4 right-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
// //       >
// //         Toggle {darkMode ? "Light" : "Dark"} Mode
// //       </button>

// //       <h1 className="text-4xl font-semibold mb-6">Blockchain Mining Game</h1>

// //       <button
// //         onClick={connectWallet}
// //         className="mb-6 py-2 px-4 bg-green-500 text-white rounded-lg"
// //       >
// //         {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
// //       </button>

// //       <div className="w-full max-w-lg p-6 bg-gray-700 rounded-xl shadow-lg space-y-6">
// //         <div className="text-center">
// //           <p className="text-lg">Tokens Mined: {tokensMined}</p>
// //           <p className="text-lg">Balance: {balance}</p>
// //           <p className="text-lg">Energy: {energy}%</p>
// //         </div>

// //         <div className="flex justify-between">
// //           <button
// //             className="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-500"
// //             onClick={startMining}
// //             disabled={isMining || energy <= 0}
// //           >
// //             Start Mining
// //           </button>
// //           <button
// //             className="bg-red-500 text-white py-2 px-4 rounded-lg"
// //             onClick={stopMining}
// //             disabled={!isMining}
// //           >
// //             Stop Mining
// //           </button>
// //         </div>

// //         <div className="mt-6">
// //           <h2 className="text-xl font-semibold mb-4">Mining Tools</h2>
// //           <div className="space-y-4">
// //             {miningTools.map((tool) => (
// //               <div key={tool.name} className="flex justify-between items-center">
// //                 <p>
// //                   {tool.name} - Power: {tool.power} - Cost: {tool.cost}
// //                 </p>
// //                 <button
// //                   className="bg-green-500 text-white py-2 px-4 rounded-lg"
// //                   onClick={() => purchaseMiningTool(tool)}
// //                 >
// //                   Purchase
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <h2 className="text-2xl font-semibold">Achievements</h2>
// //         <ul className="list-disc pl-6">
// //           {achievements.map((ach, index) => (
// //             <li key={index}>{ach}</li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div className="mt-6">
// //         <h2 className="text-2xl font-semibold">Leaderboard</h2>
// //         <ol className="list-decimal pl-6">
// //           {leaderboard.map((entry, index) => (
// //             <li key={index}>
// //               {entry.wallet}: {entry.tokens} tokens
// //             </li>
// //           ))}
// //         </ol>
// //       </div>

// //       <div className="mt-6 text-center">
// //         <Link href="/" className="text-gray-400 hover:text-gray-200 text-lg">
// //           Back to Home
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MiningGame;


// /* Updated MiningGame Component */
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";

// const MiningGame = ({ miningPower1, setTokensMined, addAchievement }) => {
//   const [miningPower, setMiningPower] = useState(miningPower1);
//   const [miningProgress, setMiningProgress] = useState(0);
//   const [minedTokens, setMinedTokens] = useState(0);
//   const [balance, setBalance] = useState(0);
//   const [isMining, setIsMining] = useState(false);
//   const [walletAddress, setWalletAddress] = useState("");
//   const [tokenContract, setTokenContract] = useState(null);
//   const [autoMining, setAutoMining] = useState(false);

//   const [miningTools, setMiningTools] = useState([
//     { name: "Pickaxe", cost: 50, power: 2 },
//     { name: "Advanced Drill", cost: 200, power: 5 },
//     { name: "Laser Cutter", cost: 1000, power: 15 },
//   ]);
//   const [autoMinerCost, setAutoMinerCost] = useState(500);

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
//       const address = await signer.getAddress();
//       setWalletAddress(address);

//       const tokenAddress = "0xYourTokenContractAddress"; // Replace with your token contract address
//       const tokenABI = [
//         "function balanceOf(address) view returns (uint256)",
//         "function transfer(address recipient, uint256 amount) public returns (bool)",
//       ];

//       const contract = new ethers.Contract(tokenAddress, tokenABI, signer);
//       setTokenContract(contract);

//       console.log("Wallet connected:", address);
//     } else {
//       alert("Please install MetaMask");
//     }
//   };

//   const startMining = () => {
//     if (miningPower <= 0 || miningProgress >= 100) return;
//     setIsMining(true);
//   };

//   const stopMining = () => {
//     setIsMining(false);
//   };

//   const increaseMiningPower = () => {
//     if (balance >= 10) {
//       setMiningPower(miningPower + 1);
//       setBalance(balance - 10);
//     }
//   };

//   const purchaseMiningTool = (tool) => {
//     if (balance >= tool.cost) {
//       setMiningPower(miningPower + tool.power);
//       setBalance(balance - tool.cost);
//       addAchievement(`Purchased ${tool.name}`);
//     } else {
//       alert("Not enough balance!");
//     }
//   };

//   const buyAutoMiner = () => {
//     if (balance >= autoMinerCost) {
//       setAutoMining(true);
//       setBalance(balance - autoMinerCost);
//       addAchievement("Auto Miner Activated!");
//     } else {
//       alert("Not enough balance to purchase Auto Miner");
//     }
//   };

//   useEffect(() => {
//     let miningInterval;

//     if (isMining) {
//       miningInterval = setInterval(() => {
//         setMiningProgress((prevProgress) => {
//           const newProgress = prevProgress + miningPower;
//           if (newProgress >= 100) {
//             setMinedTokens((prevTokens) => prevTokens + 1);
//             setTokensMined((prev) => prev + 1);
//             setBalance((prevBalance) => prevBalance + 10);
//             setMiningProgress(0);
//           }
//           return newProgress;
//         });
//       }, 1000);
//     } else {
//       clearInterval(miningInterval);
//     }

//     return () => {
//       clearInterval(miningInterval);
//     };
//   }, [isMining, miningPower]);

//   return (
//     <div className="flex flex-col items-center bg-gray-200 text-white p-6 rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Mining Game</h2>
//       <p className="text-lg">Mining Progress: {miningProgress}%</p>
//       <div className="w-full bg-gray-600 rounded-full h-4 my-2">
//         <div
//           className="bg-green-500 h-4 rounded-full"
//           style={{ width: `${miningProgress}%` }}
//         ></div>
//       </div>
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
//         onClick={startMining}
//       >
//         Start Mining
//       </button>
//       <button
//         className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
//         onClick={stopMining}
//       >
//         Stop Mining
//       </button>
//       <button
//         className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4"
//         onClick={increaseMiningPower}
//       >
//         Increase Power (+1)
//       </button>
//       <button
//         className="bg-purple-500 text-white py-2 px-4 rounded-lg mt-4"
//         onClick={buyAutoMiner}
//       >
//         Buy Auto Miner
//       </button>
//     </div>
//   );
// };

// export default MiningGame;

