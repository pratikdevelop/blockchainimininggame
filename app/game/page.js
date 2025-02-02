/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";

const MiningGame = () => {
  const [miningPower, setMiningPower] = useState(1);
  const [tokensMined, setTokensMined] = useState(0);
  const [balance, setBalance] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [isMining, setIsMining] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [dailyRewardClaimed, setDailyRewardClaimed] = useState(false);

  const miningTools = [
    { name: "Pickaxe", cost: 50, power: 2 },
    { name: "Advanced Drill", cost: 200, power: 5 },
    { name: "Laser Cutter", cost: 1000, power: 15 },
  ];

  const energyItems = [
    { name: "Small Energy Potion", cost: 30, restore: 20 },
    { name: "Large Energy Potion", cost: 80, restore: 50 },
  ];

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  useEffect(() => {
    const regenEnergy = setInterval(() => {
      setEnergy((prev) => Math.min(prev + 5, 100));
    }, 5000);
    return () => clearInterval(regenEnergy);
  }, []);

  useEffect(() => {
    let miningInterval;
    if (isMining) {
      miningInterval = setInterval(() => {
        setTokensMined((prev) => prev + miningPower);
        setBalance((prev) => prev + 10);
        setEnergy((prev) => Math.max(prev - 10, 0));
        checkAchievements(tokensMined + miningPower);
      }, 1000);
    }
    return () => clearInterval(miningInterval);
  }, [isMining, miningPower, tokensMined]);

  useEffect(() => {
    if (Math.random() < 0.1) {
      alert("🔥 Lucky Boost! +5 mining power!");
      setMiningPower((prev) => prev + 5);
    }
  }, [tokensMined]);

  const startMining = () => {
    if (energy > 0) {
      setIsMining(true);
    } else {
      alert("Not enough energy to mine!");
    }
  };

  const stopMining = () => {
    setIsMining(false);
  };

  const checkAchievements = (totalMined) => {
    const newAchievements = [];
    if (totalMined >= 100 && !achievements.includes("Century Miner")) {
      newAchievements.push("Century Miner");
    }
    if (totalMined >= 500 && !achievements.includes("Halfway to the Moon")) {
      newAchievements.push("Halfway to the Moon");
    }
    setAchievements((prev) => [...prev, ...newAchievements]);
  };

  const purchaseMiningTool = (tool) => {
    if (balance >= tool.cost) {
      setMiningPower((prev) => prev + tool.power);
      setBalance((prev) => prev - tool.cost);
    } else {
      alert("Not enough balance!");
    }
  };

  const claimDailyReward = () => {
    if (!dailyRewardClaimed) {
      setBalance((prev) => prev + 50);
      setDailyRewardClaimed(true);
    } else {
      alert("Daily reward already claimed!");
    }
  };

  const buyEnergyItem = (item) => {
    if (balance >= item.cost) {
      setEnergy((prev) => Math.min(prev + item.restore, 100));
      setBalance((prev) => prev - item.cost);
    } else {
      alert("Not enough balance!");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col items-center min-h-screen py-12 px-6 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Dark/Light Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <h1 className="text-4xl font-semibold mb-6">Blockchain Mining Game</h1>

      {/* Wallet Connection Button */}
      <button
        onClick={connectWallet}
        className="mb-6 py-2 px-4 bg-green-500 text-white rounded-lg"
      >
        {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
      </button>

      {/* Daily Reward Button */}
      <button
        onClick={claimDailyReward}
        className="mb-6 py-2 px-4 bg-yellow-500 text-white rounded-lg"
      >
        Claim Daily Reward
      </button>

      {/* Game Stats: Tokens Mined, Balance, and Energy */}
      <div className="w-full max-w-lg p-6 bg-gray-700 rounded-xl shadow-lg space-y-6 mb-6">
        <div className="text-center text-lg">
          <p>Tokens Mined: {tokensMined}</p>
          <p>Balance: {balance}</p>
          <p>Energy: {energy}%</p>
        </div>

        {/* Mining Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-500"
            onClick={startMining}
            disabled={isMining || energy <= 0}
          >
            Start Mining
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
            onClick={stopMining}
            disabled={!isMining}
          >
            Stop Mining
          </button>
        </div>
      </div>

      {/* Energy Item Shop */}
      <div className="mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Energy Items</h2>
        <div className="flex space-x-4">
          {energyItems.map((item) => (
            <button
              key={item.name}
              className="bg-purple-500 text-white py-2 px-4 rounded-lg"
              onClick={() => buyEnergyItem(item)}
            >
              {item.name} - Restore {item.restore} - Cost: {item.cost}
            </button>
          ))}
        </div>
      </div>

      {/* Mining Tools Shop */}
      <div className="w-full max-w-lg p-6 bg-gray-700 rounded-xl shadow-lg space-y-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Mining Tools</h2>
        <div className="space-y-4">
          {miningTools.map((tool) => (
            <div key={tool.name} className="flex justify-between items-center">
              <p>
                {tool.name} - Power: {tool.power} - Cost: {tool.cost}
              </p>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
                onClick={() => purchaseMiningTool(tool)}
              >
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <ul className="list-disc pl-6">
          {achievements.map((ach, index) => (
            <li key={index}>{ach}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MiningGame;
