import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Tiny Tot MedTracker</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/log-in">Log In</Link>
            </div>
        </nav>
    )
};

export default Navbar;