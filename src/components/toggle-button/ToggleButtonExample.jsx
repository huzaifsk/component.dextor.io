import React from "react";
import ToggleButton from "./ToggleButton";

export default function ToggleButtonExample() {
  const handleToggle = (newState) => {
    console.log(`Toggle is now: ${newState ? "On" : "Off"}`);
  };

  return (
    <div className="flex justify-center items-center">
      <ToggleButton
        initialState={false}
        onToggle={handleToggle}
        label={"toggle button"}
      />
    </div>
  );
}
