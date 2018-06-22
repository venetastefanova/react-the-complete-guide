import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  //state available only in this kind of component with class
  //persons is whatever we name it
  state = {
    persons : [
      {name: "Veneta",age: 22},
      {name: "Joel", age:26},
      {name:"Bear", age:2}
    ],
    otherState: "some other value",
    showsPersons: false
  }

  switchNameHandler = (newName)=>{
      //console.log("clicked");
      this.setState({
        persons : [
          {name: newName ,age: 22},
          {name: "Loel", age:26},
          {name:"Bear", age:2}
        ]
      })

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
              this.state.persons.map(person => {
              return <Person 
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
