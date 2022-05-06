import React, { Component } from 'react';
    
    
class Birthday extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.person['age'],
            hair: this.props.person['hair'],
            firstName: this.props.person['firstName'],
            lastName: this.props.person['lastName'],
        };
    }


    render() {
        return (
            <div>
                <h1>{ this.state.lastName }, { this.state.firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { this.state.hair }</p>
                <button onClick={ () => this.setState(
                        { age: this.state.age+1 }) }>
                Birthday { this.state.fName } { this.state.lName }
                </button>
            </div>
        );
    }
}
    

    
export default Birthday;

