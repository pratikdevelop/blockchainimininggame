import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen py-12 px-6">
      <h1 className="text-4xl font-semibold mb-6">About Blockchain Miner</h1>
      <p className="text-xl mb-6">
        Blockchain Miner is an interactive game that simulates blockchain
        mining. Players start with a basic mining power and can upgrade tools,
        increase mining power, and automatically mine tokens. The goal is to
        collect tokens and improve your mining operation by purchasing better
        tools and upgrades.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How the Game Works</h2>
      <p className="text-lg mb-4">
        Players click to mine tokens and accumulate balance. The more you mine,
        the more you can invest in upgrading your mining power and purchasing
        advanced mining tools. You can also buy an auto miner to help you mine
        tokens automatically. Achieve milestones and upgrade your mining
        efficiency to dominate the blockchain mining world.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Developed By</h2>
      <p className="text-lg mb-6">
        This game was created as a fun way to simulate the mining process and
        educate people on blockchain technology and token economics.
      </p>

      <p className="text-xl mb-6">
        Blockchain Miner is a simulation game where you can mine tokens and
        upgrade your mining power to dominate the blockchain.
      </p>

      {/* Timeline or Milestones */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-4 mb-8">
        <h3 className="text-xl font-semibold">Game Development Milestones</h3>
        <ul className="space-y-2 text-lg">
          <li>🌱 Initial concept design</li>
          <li>⚙️ First prototype released</li>
          <li>🚀 Official launch of Blockchain Miner</li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-gray-400 hover:text-gray-200 text-lg">
            Back to Home
        
        </Link>
      </div>
    </div>
  );
};

export default About;
