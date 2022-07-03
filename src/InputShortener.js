import React, { useState } from "react";
const InputShortener = ({ setinputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setinputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
