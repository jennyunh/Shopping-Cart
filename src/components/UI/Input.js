import classes from './Input.module.css';
import React from 'react';

//spread operator below example:
//if input is {type: "text"},
//spread operator ensures the type="text" is added

const Input = React.forwardRef((props, ref) => {
return (
    <div className={classes.input}>
<label htmlFor={props.input.id}>{props.label}</label>
<input ref={ref} {...props.input}/>
    </div>
)
})

export default Input;