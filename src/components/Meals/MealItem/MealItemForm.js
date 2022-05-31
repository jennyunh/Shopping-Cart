import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {useRef, useState} from 'react';

const MealItemForm = props => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();



  //SUBMIT HANDLER
const submitHandler = (e) => {
  e.preventDefault();

  const enteredAmountStr = amountInputRef.current.value;
  //adding the plus sign before the string makes it into a type number.
  const enteredAmountNum = +enteredAmountStr;

  if ((enteredAmountStr.trim().length === 0) || (enteredAmountNum < 1) || (enteredAmountNum > 5)) {
setAmountIsValid(false);
  }

props.addToCart(enteredAmountNum);

}




  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (number between 1 - 5)</p>}
    </form>
  );
};

export default MealItemForm;
