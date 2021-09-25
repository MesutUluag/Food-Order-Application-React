import React from 'react';
import classes from "./Input.module.css";

// we are using forwardRef to use useRef hook
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});
export default Input;