/* eslint-disable no-eval */
import React, { useState } from "react";
import "./App.css"
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";


const App = () => {

    const [result, setResult] = useState('');
    const [init, setInit] = useState(true);

    const concatResult = (concat, separator = false) => {
        const separatorStr = separator ? ' ' : '';
        return `${
            result
        }${
            separatorStr
        }${
            concat
        }${
            separatorStr
        }`
    }

    const calculate = () => {
        setInit(true);
        return `${(eval(result))}`;
    }

    const handleContentClear = () => {
        setResult('');
    }

    const handleDelete = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const handleClickNumber = (number) => {
        if (init) {
            setInit(false);
            setResult(number);
        } else {
            setResult(concatResult(number));
        }
    }

    const handleClickOperation = (operation) => {
        if (init) {
            setInit(false);
        }
        setResult(concatResult(operation, true));
    }

    const handleClickEqual = () => {
        setResult(calculate());
    }

    return (
        <main className="calculadora">
            <Result className="result-label" value={ result } />
            <div className="grid">
                <div>
                    <Numbers className="numbers" onClickNumber={ handleClickNumber } />
                    <Functions
                        className="functions"
                        onContentClear={ handleContentClear }
                        onDelete={ handleDelete }
                    />
                </div>
                <MathOperations
                    className="math-operations"
                    onClickEqual={ handleClickEqual }
                    onClickOperation={ handleClickOperation }
                />
            </div>
        </main>
    )
}

export default App;