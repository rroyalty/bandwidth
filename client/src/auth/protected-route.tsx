import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading/Loading";

interface IProtectedRoute {
  component: FunctionComponent; 
}

const ProtectedRoute = ({ component, ...args }:IProtectedRoute) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;