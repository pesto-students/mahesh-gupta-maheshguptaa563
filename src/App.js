import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import Navbar from "./Navbar";
import ContactUs from "./pages/ContactUs";
import {Route, Routes} from "react-router-dom"

function App() {
  const [inputValue, setinputValue] = useState("");
  
  return (
    <>
      <Navbar />
      <div className="componentContainer">
        <Routes>
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
      <div className="container">
        <InputShortener setinputValue={setinputValue} />
        <BackgroundAnimate />
        <LinkResult inputValue={inputValue} />
      </div>
    </>
  );
}
export default App;
