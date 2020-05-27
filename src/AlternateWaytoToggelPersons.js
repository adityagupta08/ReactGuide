// Alternate Way to toggle Persons in App.js using Ternary Operator.
1.
//Declare In class
state = {

    persons : [
      {name : 'Zeref' , age: 28},
      {name: 'Natsu', age:29},
      {name: 'Lucy', age:26}
    ],
    showPersons : false
 }

  // 2.Declare In class
 togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
                                                // setState merges the updated value it does not replace whole state with 
                                                //just showPersons, Persons array is left untouched just showPersons are updated
    });
 }

 // IN JSX inside return function
//  3. 
 <button
      style = {style}
      onClick = {this.togglePersonHandler}> Toggle Persons !!
 </button>

// 4.
{
    this.state.showPersons ?   // Using Ternary Operator beacuse it is all just javaScript in background
      <div>

    <Person 
      name = {this.state.persons[0].name}
      age  = {this.state.persons[0].age} />

    <Person 
      name = {this.state.persons[1].name}
      age  = {this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this,'Max!!')} 
     
      changed = {this.nameChangedHandler}
      >  
       My Hobbies are: Swimming
    </Person>

    <Person 
      name = {this.state.persons[2].name}
      age  = {this.state.persons[2].age} />
    </div> : null 
    }

