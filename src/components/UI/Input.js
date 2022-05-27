import classes from './Input.module.css';

//spread operator below example:
//if input is {type: "text"},
//spread operator ensures the type="text" is added

const Input = props => {
return (
    <div className={classes.input}>
<label htmlFor={props.input.id}>{props.label}</label>
<input {...props.input}/>
    </div>
)
}

export default Input;