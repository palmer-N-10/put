import React, { useState } from 'react';
    
    
const Birthday = props => {
    const [age, setAge] = useState(props.age);
    const ageClick= ()=>{
        setAge({
            age: state.age+1
        })
    }
    
    return(
        <div>
            <h1>{props.fullName}</h1>
          <h2>Age :{ state.age } </h2>  
          <h2>Hair Color:{props.hairColor}</h2>
          <button onClick={ageClcik}>Birthday</button>
        
        
        
        </div>
    );
}
    
export default Birthday;

