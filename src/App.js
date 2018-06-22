import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  //state available only in this kind of component with class
  //persons is whatever we name it
  state = {
    persons : [
      {id:'1', name: "Veneta",age: 22},
      {id:'2', name: "Joel", age:26},
      {id:'3', name:"Bear", age:2}
    ],
    otherState: "some other value",
    showsPersons: false
  }

    nameChangedHandler = (event) =>{
      this.setState({
        persons : [
          {name: "Veneta",age: 22},
          {name: event.target.value, age:26},
          {name:"Bear", age:2}
        ]
      })
    }

    deletePersonHandler = (personIndex) =>{
        const persons = this.state.persons.slice();//slice creates a copy of the array
        persons.splice(personIndex,1); //removes 1 element from the array
        this.setState({persons:persons});// set the state of person with the update person from the slicing
    }
    togglePersonsHandler = ()=>{
        const doesShow = this.state.showsPersons; //gets the value
        this.setState({showsPersons : !doesShow}); // changes the state for this value
    }
  render() {
    const inlineStyles={
      backgrondColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: "8px",
      cursor:"pointer"
  };

    let persons = null;
    if(this.state.showsPersons){
        persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
              return <Person 
                      click ={()=>this.deletePersonHandler(index)}
                      key={person.id} //using dummy id from the array, but usually comes from DB's id
                      name={person.name} 
                      age={person.name}/>
              })
            }
             
           </div>

          
        );
    }
    return (
      <div className="App">
        <h1>Hi</h1>
        <button             style={inlineStyles}
            onClick={this.togglePersonsHandler}>Switch name</button>
        {/* rendering the same "the javascript way"; creating a variable and putting the jsx there
        then just printing the value 'persons" down */}
        {persons}  
      </div>
    );
  }
  
}

export default App;
