import React from "react";

// export default function DarkCircle ({ darkSwitch }) {
//   return (
//     <svg width="20" height="17" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="10" cy="10" r="10" fill="black" stroke="#C80000" strokeWidth="0.5"/>
//     </svg>
//   );
// };

const DarkMode = ({ darkSwitch, dark }) => {
  return (
    <div className={dark} onClick={() => darkSwitch()}>
      <span>Dark mode</span>
    </div>
  );
};

export default DarkMode;
