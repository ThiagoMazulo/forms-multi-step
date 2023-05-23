import React from "react";
import { useState } from "react";
import { GetStep } from "./GetStap";
import "./App.css";


function App() {
  const [passo, setPasso] = useState(1);

  function nextStep() {
    if (passo < 4) {
      setPasso(passo + 1);
    }
  }

  function goBack() {
    if (passo > 1) setPasso(passo - 1);
  }

  console.log(passo);

  return (
    <div className="background">
      <div className="app">
        <aside className="side-bar">
          <section className="steps">
            <ul>
              <li className={`${passo === 1 ? "step1" : ""}`}>
                <span className="step-number">1</span>
                <div className="infor-step1">
                  <h3>Step 1</h3>
                  <p>your Info</p>
                </div>
              </li>
              <li className={`${passo === 2 ? "step1" : ""}`}>2</li>
              <li className={`${passo === 3 ? "step1" : ""}`}>3</li>
              <li className={`${passo === 4 ? "step1" : ""}`}>4</li>
            </ul>
          </section>
        </aside>
        <div className="forms-infor">
          <GetStep passo={passo} nextStep={nextStep} goBack={goBack} />
        </div>
      </div>
    </div>
  );
}

export default App;
