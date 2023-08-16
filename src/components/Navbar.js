import '../index.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar = () => {
    const { isAuthenticated } = useAuth0();


    return (  
        <nav className="navbar">
            <h1>Tiny Tot MedTracker</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/parent-portal">Parent Portal</Link>
                
                {!isAuthenticated && <LoginButton className="navbar-button" />}
                {isAuthenticated && <LogoutButton className="navbar-button" />}

                {/* {isAuthenticated && 
                    <div className="dropdown-content">
                        {childrenNames.map((name, index) => (
                            <Link key={index} to={`/child/${name.toLowerCase()}`}>{name}</Link>
                        ))}
                    </div>
                } */}
            </div>
        </nav>
    );
}; 

export default Navbar;