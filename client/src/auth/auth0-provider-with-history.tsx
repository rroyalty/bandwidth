import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { History } from 'history';

const Auth0ProviderWithHistory:React.FC = ({ children }):JSX.Element => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || "WRONG";
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "WRONG";

  const history: History = useHistory();

  const onRedirectCallback: any = (appState:any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;