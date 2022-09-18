import React from "react";
import "./App.css"
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";


const App = () => {

    const handleContentClear = () => {
        console.log('Content clear click!');
    }

    const handleDelete = () => {
        console.log('Delete click!');
    }

    const handleClickNumber = (number) => {
        console.log('Number click!', number)
    }

    const handleClickOperation = (operation) => {
        console.log('Operation click: ', operation);
    }

    const handleClickEqual = () => {
        console.log('Equal click');
    }

    return (
        <main className="calculadora">
            <Result className="result-label" value={ "5" } />
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