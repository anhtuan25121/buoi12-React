import React, { useState } from 'react'

export default function Hook4() {
    const Calculator = () => {
        const [a, setA] = useState('');
        const [b, setB] = useState('');
        const [result, setResult] = useState('');
    }
    return (
        <div className='calculator'>
            <input type='text' value={a} placeholder='Enter a ' onChange={(e) => setA(e.target.value * 1)} /><br />
            <input type='text' value={b} placeholder='Enter b ' onChange={(e) => setB(e.target.value * 1)} /><br />
            <button onClick={() => setResult(a + b)}>+</button>
            <button onClick={() => setResult(a - b)}>-</button>
            <button onClick={() => setResult(a * b)}>x</button>
            <button onClick={() => setResult((a / b).toFixed(2))}>/</button><br />
            <button>Result: {result}</button>

        </div>

    )
}
