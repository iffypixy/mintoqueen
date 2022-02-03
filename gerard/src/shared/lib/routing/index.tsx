import * as React from "react";
import {Navigate, Route, RouteProps} from "react-router-dom";
import {useSelector} from "react-redux";

import {authSelectors} from "@features/auth";

interface PrivateRouteProps extends RouteProps {}

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <Route
      {...props}
      element={isAuthenticated ? props.element : <Navigate to="/login" />}
    />
  );
};

interface PublicRouteProps extends RouteProps {}

export const PublicOnlyRoute: React.FC<PublicRouteProps> = (props) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <Route
      {...props}
      element={isAuthenticated ? <Navigate to="/" /> : props.element}
    />
  );
};
