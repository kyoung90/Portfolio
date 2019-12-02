import React from "react";
import { Stack } from "./Stack";

export const StackContainer = props => {
  const generateStackIcons = () => {
    return props.stack.map(tech => <Stack tech={tech} />);
  };
  return (
    <div>
      <div className="d-flex justify-content-around">{generateStackIcons()}</div>
    </div>
  );
};
