import { Link } from "react-router-dom";

const NavBar = () => {
  return (
<nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <center>
        <Link to="/" className="text-white font-bold text-lg mx-4 hover:text-gray-300">Home</Link>
        <Link to="/addcard" className="text-white font-bold text-lg mx-4 hover:text-gray-300">Add Card</Link>
      </center>
    </nav>
  );
};

export default NavBar;
