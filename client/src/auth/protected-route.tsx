import React, { FunctionComponent } from "react";
import { Route, withRouter } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading/Loading";

interface IRouteProps {
  location?: any;
  component?: any;
  render?: any;
  children?: any;
  path?: any;
  exact?: any;
  sensitive?: any;
  strict?: any;
}

const ProtectedRoute: React.FC<IRouteProps> = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;