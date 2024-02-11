import React from "react";

const DarkButton = ({ darkSwitch }) => {
  return (
    <div onClick={() => darkSwitch()}>
      <span>Dark mode</span>
    </div>
  );
};

export default DarkButton;
