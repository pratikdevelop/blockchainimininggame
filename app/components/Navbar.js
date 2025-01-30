// import { useState } from 'react';

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo and App Title */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold">Blockchain Miner</div>
        </div>

        {/* Desktop Menu */}
        <div className="flex space-x-6">
          {/* <a href="" className="hover:text-gray-400 transition duration-200">
            Home
          </a>
          <a href="game" className="hover:text-gray-400 transition duration-200">
            Game
          </a>
          <a href="about" className="hover:text-gray-400 transition duration-200">
            About
          </a>
          <a href="contact" className="hover:text-gray-400 transition duration-200">
            Contact
          </a> */}

          <button className="absolute top-4 right-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
            Toggle Mode
          </button>
        </div>

        {/* Mobile menu toggle */}
        {/* <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <span role="img" aria-label="menu">
              🍔
            </span>
          </button>
        </div> */}
      </div>

      {/* Mobile Dropdown Menu
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <a href="" className="block hover:text-gray-400 transition duration-200">
            Home
          </a>
          <a href="game" className="block hover:text-gray-400 transition duration-200">
            Game
          </a>
          <a href="about" className="block hover:text-gray-400 transition duration-200">
            About
          </a>
          <a href="contact" className="block hover:text-gray-400 transition duration-200">
            Contact
          </a>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
