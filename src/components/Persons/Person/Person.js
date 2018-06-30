import React, {Component} from 'react';
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('Person.js- inside constructor', props);
        // same thing as defining it outside, so this is not recommended
        //this is the old way of doing it
       
      }
    
      componentWillMount(){
        console.log("Person.js inside componentWillMount");
      }
    
      componentDidMount(){
        console.log("Person.js inside componentDidMount");
        
      }

    render(){
        console.log("person.js inside render");
        
        return (
            <Aux>
                <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
    
}
// adding validation to the props; what kind of data types it should return

Person.propTypes = {
    click: PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed: PropTypes.func
}

// sends it to withClass.js
export default withClass(Person, classes.Person);
