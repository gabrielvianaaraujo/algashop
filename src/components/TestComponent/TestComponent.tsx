import React, { useState } from 'react';
import './TestComponent.css';


const TestComponent = (props: {name: string}) => {

    const [age, setAge] = useState(18);

    return(
        <div className="TestComponent">Olá {props.name}, {age}
        <br />
        <button onClick = {() => {
            setAge(age + 1);
        }}>
            +
        </button>
        <button onClick = {() => {
            setAge(age - 1);
        }}>
            -
        </button>
        </div>
    )
}

export default TestComponent;