import React from 'react';

// it's not functional component, it's a normal js function
// just returns a function that qualifies as functional component

const withClass = (WrappedComponent, className) => {
    return (props)=>(
            <div className={className}>
                    <WrappedComponent/>
                </div>
    )
};

export default withClass;