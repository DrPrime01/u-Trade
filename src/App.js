import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Intersect from "./Assets/Images/Intersect.png";
function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <div className="text-wrapper">
          <h1 className="heading">Honing Your Trading Skills</h1>
          <p className="text">
            We're Here to Help. Build Your Trading Skills . Wide Range of
            Topics, Q&As & Access to Past Webinars. In-Depth Market Analysis.
            Support in 30+ Languages. Secure & Safe.
          </p>
          <button className="btn">Ready!</button>
        </div>
        <div className="image">
          <img src={Intersect} alt="u-trade img" />
        </div>
      </div>
    </div>
  );
}

export default App;
