import React from 'react';
import './TestComponent.css';


const TestComponent = (props: {name: string}) => {
    return(
        <div className="TestComponent">Olá {props.name} !!!</div>
    )
}

export default TestComponent;