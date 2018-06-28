// just wraps another component, doesn't do much
// but outputs the wrapping component, so we can take advantage  of it
//used when using 3rd party packages
const aux = (props) => props.children;

export default aux;