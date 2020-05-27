// Use ES6 style for creating Component
import React from 'react';
import Radium from 'radium'
import './Person.css';

const person = (props) =>{
    // You cant define properties in this becaus its just aa simple function but you can define
    // it using "const"
    return (
        <div className = "Person">
                                        {/* To display dynamic content as part of JSX */}
                                        {/* <p> I'm a Person and i am {Math.floor(Math.random()*30)} years old.</p> */}
                                        
                                    
                                        {/* Using attributes value (name and age) passed from parent component "App" into "Peron" component 
                                        while displaying JSX of Person component
                                        via props */}

            {/* <p onClick = {props.click}>I am {props.name} and i am {props.age} years old</p> */}
            
            <p onClick = {props.clicked}>I am {props.name} and i am {props.age} years old</p>

                                        {/* We didn't pass anything as children on Person 
                                        children referes to any plain text or complex HTML between opening and closing tag of our component 
                                        And these children "My Hobbies: Racing, Gaming" can be outputed by using this syntax 
                                        */}

            <p>{props.children}</p>

                                        {/* Two way Binding */}

                                        {/* This will not show initial value in input text field and input field will be locked */}
                                                            {/* <input type="text" onChange = {props.changed} /> */}
            <input type = "text" onChange = {props.changed} value = {props.name}/>
                                                        {/* To show initial value in input text field */}
        </div>
    
    )};
    

export default Radium(person)