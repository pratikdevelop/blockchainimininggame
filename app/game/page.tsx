
/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';
// import { useState } from "react";
// import MiningGame from "../components/MiningGame";
// import Link from "next/link";

// const Game = () => {
//   const [miningPower1, setMiningPower] = useState<any>(1);
//   const [tokensMined, setTokensMined] = useState<any>(0);

//   const handleUpgradeMiningPower = () => {
//     setMiningPower(miningPower1 + 1);
//   };

//   return (
//     <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen py-12 px-6">
//       <h1 className="text-4xl font-semibold mb-6">Start Mining Tokens!</h1>
//       <p className="text-xl mb-8">
//         Mine tokens, upgrade your power, and dominate the blockchain!
//       </p>

//       {/* Mining Game */}
//       <MiningGame miningPower1={miningPower1} setTokensMined={setTokensMined} />

//       {/* Stats Display */}
//       <div className="mt-8 space-y-4">
//         <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
//           <h3 className="text-xl font-semibold">Tokens Mined</h3>
//           <p className="text-3xl">{tokensMined}</p>
//         </div>
//         <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
//           <h3 className="text-xl font-semibold">Mining Power</h3>
//           <p className="text-3xl">{miningPower1}</p>
//         </div>
//       </div>

//       {/* Upgrade Button */}
//       <button
//         onClick={handleUpgradeMiningPower}
//         className="mt-8 py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-200"
//       >
//         Upgrade Mining Power
//       </button>

//       {/* Back to Home Link */}
//       <div className="mt-8 text-center">
//         <Link href="/" className="text-gray-400 hover:text-gray-200 text-lg">
//             Back to Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Game;


/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from "react";
import MiningGame from "../components/MiningGame";
import Link from "next/link";

const Game = () => {
  const [miningPower1, setMiningPower] = useState<number>(1);
  const [tokensMined, setTokensMined] = useState<number>(0);
  const [achievements, setAchievements] = useState<string[]>([]);

  const handleUpgradeMiningPower = () => {
    setMiningPower(miningPower1 + 1);
    if (miningPower1 + 1 >= 10) {
      addAchievement("Mining Power Level 10 Achieved!");
    }
  };

  const addAchievement = (achievement: string) => {
    if (!achievements.includes(achievement)) {
      setAchievements([...achievements, achievement]);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen py-12 px-6">
      <h1 className="text-4xl font-semibold mb-6">Start Mining Tokens!</h1>
      <p className="text-xl mb-8">
        Mine tokens, upgrade your power, and dominate the blockchain!
      </p>

      {/* Mining Game */}
      <MiningGame
        miningPower1={miningPower1}
        setTokensMined={setTokensMined}
        addAchievement={addAchievement}
      />

      {/* Stats Display */}
      <div className="mt-8 space-y-4">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Tokens Mined</h3>
          <p className="text-3xl">{tokensMined}</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Mining Power</h3>
          <p className="text-3xl">{miningPower1}</p>
        </div>
      </div>

      {/* Achievements Display */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-semibold">Achievements</h3>
        <ul className="list-disc list-inside">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-green-400">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Upgrade Button */}
      <button
        onClick={handleUpgradeMiningPower}
        className="mt-8 py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-200"
      >
        Upgrade Mining Power
      </button>

      {/* Back to Home Link */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-gray-400 hover:text-gray-200 text-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Game;

