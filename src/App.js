import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
import FunctionalState from './Person/stateFunctionalComponent.js';


class App extends Component {
                                              // You can define properties inside components which extend Component
                                              // state can only be define inside components which extend Component
                                              // State (it is a property) is used when we need to manage some component internal data

 state = {
    persons : [
      {id:'01', name : 'Zeref' , age: 28},
      {id:'02', name: 'Natsu', age:29},
      {id:'03', name: 'Lucy', age:26}
    ],
    showPersons : false
 }
//  switchNameHandler = ()=>{
 switchNameHandler = (newName)=>{
                                                          //console.log("This was clicked");
                                                          // DO NOT DO THIS this.state.persons[0].name = 'Maximillian';
                                                          // we are able to use "this" because of arrow function syntax , if we don't use that
                                                          // we cannot use "this" in here
  this.setState({
    persons : [
      // {name : 'Maximillian' , age: 28},
      {name : newName , age: 28},
      {name: 'Natsu', age:29},
      {name: 'Lucy', age:30}
    ]
  })
 }

 //Two way Binding
 // not flexible though 
 nameChangedHandler = (event) =>{
  this.setState({
    persons : [
      {name : 'Zeref' , age: 28},
                                              // event has target but target is the input in which we type and therfeore it must have value
      {name : event.target.value, age:29},
      {name : 'Lucy', age:26}
    ]
  })
 }
 
 // Flexible with  populating state data dynamically
 nameChangeHandler = (event , id) =>{
   const personindex = this.state.persons.findIndex(p =>{
     return p.id === id;
  });

    const person = {
      ...this.state.persons[personindex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personindex] = person;

  this.setState({
    persons : persons
  });
 }

 togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
                                                // setState merges the updated value it does not replace whole state with 
                                                //just showPersons, Persons array is left untouched just showPersons are updated
    });
 }
 deletePersonHandler = (personIndex) =>{ 
   //const persons = this.state.persons;  <- THIS IS WRONG 
                                                      // This method has a fault as it change the actual state because "const persons = this.state.persons;"
    //const persons = this.state.persons.slice() 
                    //OR                               // assigns a reference of state to persons , So any change made to this persons actually
    const persons = [...this.state.persons]
    // this "spread" operator spreads out the 
    //elements of array into list of elememnts
    // which simply gets added to this array 'persons'
    persons.splice(personIndex,1);                      // changes the state which will cause error .  THEREFORE we copy the values of state into 
    this.setState({persons:persons})                    // variable then do some operations which will not alter the original state.  
 }
 // splice removes one element from array whoes index is passed

  render() {

                                                // Inline style react components
                                                // This method does not allow full power of CSS
    const style ={
      backgroundColor: 'green',
      color          : 'white',
      font           : 'inherent',
      border         : '2px solid black',
      padding        : '8px',
      cursor         : 'pointer'
    }

    let Persons = null

    if(this.state.showPersons){
      Persons= (
        <div>
                                            {/* This method is used to display/Outputing list of Person Component Dynamically using "map function" 
                                                The Map function returns array in javaScript which needs to be converted into valid JSX form
                                                in order to render it in DOM
                                            */}
            
            {this.state.persons.map((person,index) => {
              return <Person
              clicked = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age = {person.age}
              key ={person.id}
               // Key property is IMP when we are rendering List of Data and that should be unique
              // This key property helps React update the list properly
            
              changed = {(event) => {this.nameChangeHandler(event , person.id)}}/>
             })}


          {/* 
          
          <Person 
          name = {this.state.persons[0].name}
          age  = {this.state.persons[0].age} />

        <Person 
          name = {this.state.persons[1].name}
          age  = {this.state.persons[1].age}
          // click = {this.switchNameHandler}
          click = {this.switchNameHandler.bind(this,'Max!!')} 
                                        //  binding
                                                            // This will allow us to call switchHandler method on click of para in Person.js
                                                            // via props  because here we are 
                                                            // passing its reference as a property to the props of child component that is to Person.js
                                                            // -> You can pass methods also as props
          
          //Two way Binding
          changed = {this.nameChangedHandler}
          >  
          My Hobbies are: Swimming
        </Person>

        <Person 
          name = {this.state.persons[2].name}
          age  = {this.state.persons[2].age} /> 
          */
          }
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = []  
    if(this.state.persons.length <=2){
      classes.push('red') // classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold') // classes = ['red' , 'bold']
    }

    return (
      <div className = "App">
       
       {/* <p><b>Examples of Props</b></p>
       <Person name = "Max" age  = "28"/>
       <Person name = "Manu" age = "26">
         My Hobbies are: Racing, Gaming
       </Person>
       <hr/> */}
       <p className = {classes.join(' ')}> Hi ! I am React </p>
       <p><b>Examples of state Class component</b></p>

                                                 {/* 
                                                      -> Using State to dynamically populate values of name and age to component Person 
                                                      ->  "this" refers to our class "App"

                                                      -> Do not use switchNameHadler"()" because if you use paranthesis then as soon as 
                                                          this is rendered by react that function 
                                                          will be executed and we want it to execute on click of button.
                                                          So we give its reference by using "this"

                                                      */}
    {/* <button onClick = {this.switchNameHandler}> Click ME !!</button> */}
                                                        
                                                        {/* "this" in bind controls what "this" inside the function refers to and binding it
                                                             to outside of the function binding it to the class
                                                            Here we are passing the "Name" also that needs to be changed on button click 
                                                            Therefore "bind"
                                                        */}
      
      {/* <button
      style = {style}
      onClick = {this.switchNameHandler.bind(this,'Maximillian!')}> Click ME !!
      </button> */}
      <br/>
      <button
      style = {style}
      onClick = {this.togglePersonHandler}> Toggle Persons !!
      </button>
                                                          {/* To Toggle Person Components Conditionally we created
                                                              a variable in render function and with {} we display those 
                                                              based on condition.
                                                          */}
      {Persons}                                                  
    
      
      
      {/* <hr/>
      <p><b>Examples of state Functional Component</b></p>
      <FunctionalState/> */}
       
      </div>
    );
  }
}

export default App;
