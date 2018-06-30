import React, {Component} from 'react';
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types';
import {AuthenticationContext} from "../../../containers/App";

class Person extends Component {
    constructor(props){
        super(props);
        console.log('Person.js- inside constructor', props);
        // creating reference
        this.inputElement = React.createRef();
       
      }
    
      componentWillMount(){
        console.log("Person.js inside componentWillMount");
      }
    
      componentDidMount(){
        console.log("Person.js inside componentDidMount");
        // used only on the stateful components
        if(this.props.position === 0){
            this.inputElement.current.focus();            
        }
    }

    focus(){
        this.inputElement.current.focus();
    }
    render(){
        console.log("person.js inside render");
        
        return (
            <Aux>
                <AuthenticationContext.Consumer>
                { auth => auth  ? <p>I am authenticated</p>: null}
                </AuthenticationContext.Consumer>
                <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    // used only on the stateful components
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}/>
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
