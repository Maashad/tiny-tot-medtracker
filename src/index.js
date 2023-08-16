// import history from "./utils/history";
// import { getConfig } from "./config";
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="yellow-leaf-1598.us.auth0.com"
  clientId="DR5e1BKmVZM1EuMvJlZg8QFTu25FKFQX"
  authorizationParams={{
    redirect_uri: "https://tiny-tot-medtracker.onrender.com/parent-portal"
  }}
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