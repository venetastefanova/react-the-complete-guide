import React, {PureComponent} from 'react';
import Person from './Person/Person';

// moved the persons.map logic from App.js
// props.persons is coming from app.js from persons object
class Persons extends PureComponent {
        constructor(props){
                super(props);
                console.log('Persons.js- inside constructor', props);
                this.lastPersonRef = React.createRef();       
              }
            
              componentWillMount(){
                console.log("Persons.js inside componentWillMount");
              }
            
              componentDidMount(){
                console.log("Persons.js inside componentDidMount");
                
              }

              //component updating lifecycle methods
              componentWillReceiveProps(nextProps){
                  console.log("[UPDATE Persons.js] inside componentWillReceiveProps")
              }

              // shouldComponentUpdate(nextProps, nextState){
              //   console.log("[UPDATE Persons.js] inside shouldComponentUpdate", nextProps, nextState);
              //   // returns true by default
              //   // but if specific, then it has better performance
              //   // because it doesn't re-render many things 
              //   // but only if it meets the criteria listed down
              //   return nextProps.persons !== this.props.persons ||
              //   nextProps.changed !== this.props.changed ||
              //   nextProps.clicked !== this.props.clicked;
              //   // return true;
              // }

              componentWillUpdate(nextProps, nextState){
                console.log("[UPDATE Persons.js] inside componentWillUpdate", nextProps, nextState);
                
              }
              ComponentDidUpdate(){
                console.log("[UPDATE Persons.js] inside componentWillUpdate");
                
              }
        render(){
                console.log("Persons.js inside render");
                
             return  this.props.persons.map((person, index) => {
                return <Person // props.clickced is coming from app.js
                          click ={()=>this.props.clicked(index)}
                          key={person.id} //using dummy id from the array, but usually comes from DB's id
                          name={person.name}
                          ref = {this.lastPersonRef}
                          position ={index}
                          age={person.age} // props.changes is coming fro app.js
                          changed={(event)=>this.props.changed(event, person.id)}/>          
                    
                })   
        }
}  
    
export default Persons;