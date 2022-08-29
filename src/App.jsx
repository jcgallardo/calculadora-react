import React from "react";
import "./App.css"

const numbers = (
    <div className="numbers">
    {
        Array(10).fill(null).map((value, index) => (
            <button>{ (index + 1) % 10 }</button>
        ))
    }
    </div>
);

const functions = (
    <div className="functions">
        <button>Clear</button>
        <button>r</button>
    </div>
);

const mathOperations = (
    <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
    </div>
);

const resultLabel = (
    <div className="result-label" contentEditable="true"></div>
);


const App = () => (
    <div className="calculadora">
        { resultLabel }
        <div className="grid">
            <div>
                { numbers }
                { functions }
            </div>
            { mathOperations }
        </div>
    </div>
)

export default App;