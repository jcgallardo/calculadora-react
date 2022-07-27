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


const App = () => (
    <div className="calculadora">
        <h1>Calculadora</h1>
        <div>
            { numbers }
            { functions }
        </div>
        { mathOperations }
    </div>
)

export default App;