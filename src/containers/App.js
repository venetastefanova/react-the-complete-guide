import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('App.js- inside constructor', props);
    // same thing as defining it outside, so this is not recommended
    //this is the old way of doing it
    this.state = {
    persons : [
      {id:'1', name: "Veneta",age: 22},
      {id:'2', name: "Joel", age:26},
      {id:'3', name:"Bear", age:2}
    ],
    otherState: "some other value",
    showsPersons: false
  
    }
  }

  componentWillMount(){
    console.log("App.js inside componentWillMount");
  }

  componentDidMount(){
    console.log("App.js inside componentDidMount");
    
  }
//  //component updating lifecycle methods
//  componentWillReceiveProps(nextProps){
//   console.log("[UPDATE App.js] inside componentWillReceiveProps")
// }

// shouldComponentUpdate(nextProps, nextState){
// console.log("[UPDATE App.js] inside shouldComponentUpdate", nextProps, nextState);
//   // return true by default
// // gaining better performance when we don't rerender things all the time
// // renders only if the criteria is met 
// return nextState.persons !== this.state.persons ||
// nextState.showPersons !== this.state.showPersons;
// }

componentWillUpdate(nextProps, nextState){
console.log("[UPDATE App.js] inside componentWillUpdate", nextProps, nextState);

}
ComponentDidUpdate(){
console.log("[UPDATE App.js] inside componentWillUpdate");

}

    nameChangedHandler = (event, id) =>{
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id; // if the person returning from the array has the same id
        // that the nameChangedHandler method receives as id
      }); // finds which user we are editing
      // gets the exact person without changing the state itself, so creating new object
      const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = event.target.value; //updates the person name from the input event
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons});
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
    console.log("app.js inside render");
    let persons = null;
    if(this.state.showsPersons){
        persons = (
          <div>
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              />    
           </div>
        ); 
    }
    



    return (
      <Aux>
        <button onClick={()=>{this.setState({showsPersons:true})}}>Show persons</button>
       <Cockpit
          showPersons={this.state.showsPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
          /> 
        {persons}
        </Aux>
    );
  }
  
}
//sends it to the withClass.js
export default withClass(App, classes.App);
