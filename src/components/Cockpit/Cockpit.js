import React from 'react';
import classes from './Cockpit.css';

// moving the logic for the wrapping element from app.js
const cockpit = (props) =>{
    //change button color
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }


    // apply classes dynamically
    let applyClasses = [];
    if(props.persons.length<=2){
      applyClasses.push(classes.red); // applyClasses = ["red"];
    }
    if(props.persons.length<=1){
      applyClasses.push(classes.bold); // applyClasses = ["red, "bold];
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi</h1>
            <p className={applyClasses.join(" ")} >this is really working </p>
            <button
                className={btnClass}  
                onClick={props.click}>Switch name</button>
      </div>
    );
}

export default cockpit;