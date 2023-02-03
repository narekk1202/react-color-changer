import React from "react";

function TextColor({ color, setColorText, handleChangeTextColor, colorText }) {
  return (
    <div className="flex flex-col items-center">
      <h1 style={{ color: color }} className="text-4xl text-teal-600">
        Enter color:
        <p className="inline-block ml-2">
          {color}
        </p>
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center"
      >
        <input
          value={colorText}
          onChange={(e) => setColorText(e.target.value)}
          type="text"
          className="mt-4 border-2 border-teal-700 w-72, focus:outline-none pl-2 text-teal-600"
        />
        <button
          onClick={handleChangeTextColor}
          className="mt-4 border-2 border-teal-600 w-28 h-8 text-teal-600"
        >
          Change color
        </button>
      </form>
    </div>
  );
}

export default TextColor;
