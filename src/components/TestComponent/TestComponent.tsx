import React, { useState, useEffect } from 'react';
import './TestComponent.css';


const TestComponent = (props: {name: string}) => {

    const [age, setAge] = useState(18);

    useEffect(() => {
        console.log('Component was created');
    }, []);

    useEffect(() => {
        console.log('Age has been updated: ' + age);
    }, [age]);

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