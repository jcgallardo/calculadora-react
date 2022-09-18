import React from "react";
import "./App.css"
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";


const App = () => (
    <div className="calculadora">
        <Result className="result-label" value={ 5 } />
        <div className="grid">
            <div>
                <Numbers />
                <Functions />
            </div>
            <MathOperations />
        </div>
    </div>
)

export default App;