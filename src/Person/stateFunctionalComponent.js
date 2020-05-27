// Using state property in Functional Component via React Hooks
import React, { useState } from 'react';

import Person from './Person.js'

const app = (props)=>{

    // useState allows us to use state in Functional component
    // useState returns array with only two elements and always 2 elements
   
    // First element that we will get back is our current state (current obj and in case we change the updated state)
    // Second element will be a function which allows us to update this "state" such that React is aware of it and re renders this component 
   
   // Array Destructuring to pull out elements you get from right side of Array
   // personsState will give us access to Persons object
   const [personsState, setPersonsState] = useState({
        persons : [
            {name : 'Zeref' , age: 28},
            {name: 'Natsu', age:29},
            {name: 'Lucy', age:26}
          ],
          otherState : 'Some other value'
    });
    //console.log(personsState)
    const switchNameHandler = ()=>{
        //console.log("This was clicked");
        // DO NOT DO THIS this.state.persons[0].name = 'Maximillian';
        // we are able to use "this" because of arrow function syntax , if we don't use that
        // we cannot use "this" in here

        // This function setPersonState does not merge the updated state value to previous instead it
        // replaces the old state with new updated value state. Due to this we can lost some
        // data in our original state in this case "otherState" is replaced by updated state
        setPersonsState({
          persons : [
            {name : 'Maximillian' , age: 28},
            {name: 'Natsu', age:29},
            {name: 'Lucy', age:30}
          ],
          // So it is important to manually add all the old state data in this case "otherState" property 
          otherState : personsState.otherState
        });
       };
    
    return (
        <div className = "App">
        <h1>Hi, I am React App !!</h1>
        <p><b>Examples of Props</b></p>
        <Person name = "Max" age  = "28"/>
        <Person name = "Manu" age = "26">
          My Hobbies are: Racing, Gaming
        </Person>
        <hr/>
        <p><b>Examples of state</b></p>
 
 
       <button onClick = {switchNameHandler}> Switch ME !!</button>
       <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
       <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} >
        My Hobbies are: Swimming
      </Person>
       <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age} />
        
       </div>
    )
}

export default app;