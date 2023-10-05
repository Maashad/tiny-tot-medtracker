import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import './index.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "https://tiny-tot-medtracker.onrender.com/parent-portal",
        // redirect_uri: `${window.location.origin}/parent-portal`,
        // redirect_uri: window.location.origin,
      }}
      >
        {/* {console.log(`${window.location.origin}/parent-portal`)} */}
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);