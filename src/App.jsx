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
    const [total, setTotal] = useState('');

    const concatResult = (concat, separator = false) => {
        const separatorStr = separator ? ' ' : '';
        return `${result}${separatorStr}${concat}${separatorStr}`;
    }

    const calculate = (newResult) => {
        const calculation = eval((newResult || result).toString().replace('x','*'));
        return calculation.toString();
    }

    const handleContentClear = () => {
        const newResult = '';
        setResult(newResult);
        setTotal(newResult);
    }

    const handleDelete = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const handleClickNumber = (number) => {
        const newResult =`${init ? number : concatResult(number)}`;
        if (init) {
            setInit(false);
        }
        setResult(newResult);
        setTotal(calculate(newResult));
    }

    const handleClickOperation = (operation) => {
        if (init) {
            setInit(false);
        }
        setResult(concatResult(operation, true));
    }

    const handleClickEqual = () => {
        setInit(true);
        setResult(total);
        setTotal('');
    }

    return (
        <main className="calculadora">
            <Result className="result-label" value={ result } total={ total } />
            <div className="grid">
                <div className="numbers-functions">
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