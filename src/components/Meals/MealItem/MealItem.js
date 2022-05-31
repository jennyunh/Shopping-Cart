import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import {useContext} from 'react';
import CartContext from "../../store/cartContext";

const MealItem = props => {
    const cartContext = useContext(CartContext);

    //pass add to cart function to child MealItemForm
    const addToCart = (amount) => {
cartContext.addItem({
    id: props.id,
    name: props.mealName,
    amount: amount,
    price: props.price
});
    }

    //toFixed(2) renders 2 decimal places
const price = `$${props.price.toFixed(2)}`;

return(
<li className={classes.meal}>
<div><h3>{props.mealName}</h3>
<div className={classes.description}>{props.description}</div>
<div className={classes.price}>{price}</div>
</div>

<div>
<MealItemForm addToCart={addToCart} id={props.id}/>
</div>

</li>
)
}

export default MealItem;