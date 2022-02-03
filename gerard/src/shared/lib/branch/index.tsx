import * as React from "react";

interface BranchProps {
  if: boolean;
}

export const Branch: React.FC<BranchProps> = ({if: so, children}) => {
  const [then, otherwise] = React.Children.toArray(children);

  const output = so ? then : otherwise;

  return <>{output}</>;
};
