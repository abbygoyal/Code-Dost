import React from "react";
import "./PlayButton.css";

function PlayButton() {
  return (
    <button className="button" onClick={console.log("play")}>
      Play
    </button>
  );
}

export default PlayButton;
