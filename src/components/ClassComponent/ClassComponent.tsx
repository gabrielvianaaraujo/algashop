import React, { Component } from 'react';

class ClassComponent extends Component<{name: string}> {

    constructor(props: any){
        super(props);
        console.log("constructor  reached");
        
    }

    state = {
        name: "Mundo!!"
    }

    componentDidMount(){
        console.log("didMount  reached");
        
    }

    componentDidUpdate(){
        console.log("diduPDATE  reached");
        
    }

    render() {
        console.log("render reached");
        return (
            <div>
                <p>Name: {this.state.name} </p> 
                <button onClick = {() => {
                    this.setState({name: this.props.name})
                }}>CLick me</button>
            </div>
        );
    }
}

export default ClassComponent;