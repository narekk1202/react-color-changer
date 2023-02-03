import React, { useState } from "react";
import BgColor from "./components/BgColor";
import TextColor from "./components/TextColor";

function App() {
  const [color, setColor] = useState("teal");
  const [colorText, setColorText] = useState("");
  const [backgroundText, setBackgroundText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

  function handleChangeTextColor() {
    if (colorText !== "") {
      setColor(colorText);
    }
    setColorText("");
  }

  function handleChangeBgColor() {
    if (backgroundText !== "") {
      setBackgroundColor(backgroundText);
    }
    setBackgroundText("");
  }

  return (
    <div
      style={{ background: backgroundColor }}
      className="App flex w-full h-screen items-center justify-evenly flex-col"
    >
      <TextColor
        handleChangeTextColor={handleChangeTextColor}
        color={color}
        colorText={colorText}
        setColorText={setColorText}
      />
      <BgColor
        handleChangeBgColor={handleChangeBgColor}
        backgroundText={backgroundText}
        setBackgroundText={setBackgroundText}
      />
    </div>
  );
}

export default App;
