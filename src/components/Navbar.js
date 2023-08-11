import '../index.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>Tiny Tot MedTracker</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/log-in">Log In</Link>
                <Link to="/log-out">Log out</Link>
            </div>
        </nav>
    );
};

export default NavBar;