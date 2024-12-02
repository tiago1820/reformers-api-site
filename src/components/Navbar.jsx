import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-lg font-semibold">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                </div>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <ul className={`absolute md:static md:flex md:items-center md:space-x-6 bg-gray-800 md:bg-transparent w-full md:w-auto transition-transform ${menuOpen ? "top-12 left-0" : "top-[-200%]"}`}>
                    <li className="py-2 md:py-0 text-center">
                        <Link to="/documentation" className="hover:text-blue-400">Documentation</Link>
                    </li>
                    <li className="py-2 md:py-0 text-center">
                        <Link to="/about" className="hover:text-blue-400">About</Link>
                    </li>
                    <li className="py-2 md:py-0 text-center">
                        <Link to="/support-us" className="hover:text-blue-400">Support Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
