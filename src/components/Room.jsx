import React, { useState } from "react";
import "./room.css";

function Room() {
  const [lit, setLit] = useState(true);
  let [temp, setTemp] = useState(22);

  return (
    <div className={` ${lit ? "lit" : "dark"}`}>
      <span>The Room is: {lit ? "Lit" : "Dark"} :</span>
      <button id="toggle" onClick={() => setLit(!lit)}>
        Toggle
      </button>
      <br />
      <button onClick={() => setLit(true)}>Turn On Light</button>
      <button onClick={() => setLit(false)}>Turn Off Light</button>
      <br />
      <br />
      <span>
        The Room temperature is {temp}
        <sup>o</sup> C
      </span>
      <br />
      Change Temperature
      <button
        className="temp"
        onClick={() => {
          setTemp(++temp);
        }}
      >
        +
      </button>
      <button
        className="temp"
        onClick={() => {
          setTemp(--temp);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Room;
