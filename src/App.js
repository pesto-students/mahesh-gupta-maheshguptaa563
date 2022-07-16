import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => {
    return state;
  });
  const increaseStepCount = () => {
    dispatch({ type: "ADD" });
  };
  const resetter = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <div className="App">
        <h1>You Walked {step} Steps Today</h1>;
        <button className="button1" onClick={increaseStepCount}>
          ADD A STEP
        </button>
        <br />
        <button className="button2" onClick={resetter}>
          RESET
        </button>
      </div>
    </>
  );
};

export default App;
