import React from "react";

function BgColor({
  handleChangeBgColor,
  backgroundText,
  setBackgroundText,
}) {
  return (
    <div>
      <h1 className="text-4xl text-teal-600">
        Enter background color: <p className="inline-block"></p>
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center"
      >
        <input
          value={backgroundText}
          onChange={(e) => setBackgroundText(e.target.value)}
          type="text"
          className="mt-4 border-2 border-teal-700 w-72, focus:outline-none pl-2 text-teal-600"
        />
        <button
          onClick={handleChangeBgColor}
          className="mt-4 border-2 border-teal-600 w-28 h-8 text-teal-600"
        >
          Change color
        </button>
      </form>
    </div>
  );
}

export default BgColor;
