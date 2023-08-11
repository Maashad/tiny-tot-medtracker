import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Tiny Tot MedTracker</h1>
            <div className="links">
                Home  About  Sign Up  Log In
            </div>
        </nav>
    )
};

export default Navbar;