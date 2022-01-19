import * as React from "react";

import {useDispatch} from "@shared/lib/store";
import {actions} from "../model";

export const CredentialsObtainer: React.FC = ({children}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.fetchCredentials());
  }, []);

  return <>{children}</>;
};
