import React, { Component } from 'react';

class ClassComponent extends Component<{name: string}> {

    constructor(props: any){
        super(props);
        console.log("constructor  reached");
        this.setAge = this.setAge.bind(this);
    }

    state = {
        name: "Gabriel",
        age: 0
    }

    componentDidMount(){
        console.log("didMount  reached");
        
    }

    componentDidUpdate(){
        console.log("diduPDATE  reached");
        
    }

    setAge(){
        console.log(this.state.age);
        let age : Number;
        age = this.state.age + 1;
        this.setState({age : age});
        console.log(this.state.age);
    }

    render() {
        console.log("render reached");
        return (
            <div>
                <p>Name: {this.state.name} </p> 
                <p>Name: {this.state.age} </p>
                <button onClick = {() => this.setAge()}> + </button>
            </div>
        );
    }
}

export default ClassComponent;