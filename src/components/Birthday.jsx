import React, { Component } from 'react';
    
    
class Birthday extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.person['age'],
        
        };
    }
    render() {
        const  {firstName,lastName,hair}=this.props
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hair }</p>
                <button onClick={ () => this.setState(
                        { age: this.state.age+1 }) }>
                Birthday
                </button>
            </div>
        );
    }
}
export default Birthday;

