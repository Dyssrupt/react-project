import Addition from './addition';
import Subtraction from './subtraction';
import Multiplication from './multiplication';
import Division from './division';

let CalculatorApp = () => {
    return (
        <>
            <h1>Calculator App</h1>
            <Addition />
            <Subtraction />
            <Multiplication />
            <Division />
        </>
    )
}

export default CalculatorApp;