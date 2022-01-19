import * as React from "react";
import {useSelector} from "react-redux";

import {Credentials} from "@shared/api/auth";
import {Branch} from "@shared/lib/branch";
import {selectors} from "../model";

interface AuthenticatedProps {
  render: ({credentials}: {credentials: Credentials}) => React.ReactNode;
}

export const Authenticated: React.FC<AuthenticatedProps> = ({
  render,
  children,
}) => {
  const credentials = useSelector(selectors.credentials)!;
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  const isCredentialsFetchPending = useSelector(
    selectors.isCredentialsFetchPending,
  );

  return (
    <Branch if={isAuthenticated}>
      <>{render({credentials})}</>
      <Branch if={isCredentialsFetchPending}>
        {/* @todo: to come up with the special loader for credentials */}
        <span>Loading...</span>
        <>{children}</>
      </Branch>
    </Branch>
  );
};
