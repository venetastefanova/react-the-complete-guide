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
    otherState: "some other value"
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
  render() {
    const inlineStyles={
      backgrondColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: "8px",
      cursor:"pointer"
  };

    return (
      <div className="App">
        <h1>Hi</h1>
        <button             style={inlineStyles}
 onClick={()=>this.switchNameHandler("Veeeneta!!!")}>Switch name</button>
        <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this,"veneta stefanova")}/>
        <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}/>
        <Person 
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Veneta Nikolaeva")}
            >My hobbies are:</Person>        
        
      </div>
    );
  }
  
}

export default App;
