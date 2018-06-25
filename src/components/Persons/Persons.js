import React, {Component} from 'react';
import Person from './Person/Person';

// moved the persons.map logic from App.js
// props.persons is coming from app.js from persons object
class Persons extends Component {
        constructor(props){
                super(props);
                console.log('Persons.js- inside constructor', props);
                // same thing as defining it outside, so this is not recommended
                //this is the old way of doing it
               
              }
            
              componentWillMount(){
                console.log("Persons.js inside componentWillMount");
              }
            
              componentDidMount(){
                console.log("Persons.js inside componentDidMount");
                
              }
        render(){
                console.log("Persons.js inside render");
                
             return  this.props.persons.map((person, index) => {
                return <Person // props.clickced is coming from app.js
                          click ={()=>this.props.clicked(index)}
                          key={person.id} //using dummy id from the array, but usually comes from DB's id
                          name={person.name} 
                          age={person.age} // props.changes is coming fro app.js
                          changed={(event)=>this.props.changed(event, person.id)}/>          
                    
                })   
        }
}  
    
export default Persons;