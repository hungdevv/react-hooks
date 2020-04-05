import React, { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  var color = ["red", "blue", "black", "pink", "green"];
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color") || "green";
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
      }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
