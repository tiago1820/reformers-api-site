import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/" className="navbar-link">Home</Link>
                </div>
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/documentation" className="navbar-link">Documentation</Link></li>
                    <li><Link to="/about" className="navbar-link">About</Link></li>
                    <li><Link to="/support-us" className="navbar-link">Support Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
