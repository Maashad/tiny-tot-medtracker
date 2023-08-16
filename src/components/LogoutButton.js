import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = ({className}) => {
    const { logout } = useAuth0();

    return (
        <div>
            <button className={className} onClick={() => logout(
                { logoutParams: { returnTo: "https://tiny-tot-medtracker.onrender.com/" } })}>Log Out</button>
        </div>
    );
};

export default LogoutButton;