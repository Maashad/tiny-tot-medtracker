// import history from "./utils/history";
// import { getConfig } from "./config";
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import './index.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={"https://tiny-tot-medtracker.onrender.com/parent-portal"}
  >
    <App />
  </Auth0Provider>,
);





// const onRedirectCallback = (appState) => {
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : "/home-logged-in"
//   );
// };

// const config = getConfig();

// const providerConfig = {
//   domain: config.domain,
//   clientId: config.clientId,
//   onRedirectCallback,
//   authorizationParams: {
//     redirect_uri: "/home-logged-in",
//     ...(config.audience ? { audience: config.audience } : null),
//   },
// };

{/* <React.StrictMode>
    <Auth0Provider
      {...providerConfig}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode> */}