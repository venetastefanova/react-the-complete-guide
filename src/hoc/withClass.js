import React from 'react';

// you can return functional component or stateful component
// it's not functional component, it's a normal js function
// just returns a function that qualifies as functional component
const withClass = (WrappedComponent, className) => {
    return (props)=>(
            <div className={className}>
                {/* never manipulate the WrappedComponent, just use it as it is */}
                    <WrappedComponent {...props}/> {/* pass the props as you get them*/}
                {/* {...props} splits the props object into key : value pairs and pass them to WrappedComponent*/}
                </div>
    )
};

export default withClass;