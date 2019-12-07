import React, { useState } from "react";
import { Stack } from "./Stack";

export const StackContainer = props => {
  const [hover, setHover] = useState(false)

  const generateStackIcons = () => {
    return props.stack.map(tech => <Stack tech={tech} setHover={setHover} hover={hover}/>);
  };



  return (
    <div>
      <div className="d-flex justify-content-around stack-container">
        {generateStackIcons()}
      </div>
    </div>
  );
};
