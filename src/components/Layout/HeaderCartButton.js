import { useContext } from 'react';
import CartContext from '../store/cartContext';
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = props => {
const cartContext = useContext(CartContext);

//.reduce() takes 2 arguments. First argument is a function, and the second argument is a starting value.
const numOfCartItems = cartContext.items.reduce((current, item) => {return current + item.amount;}, 0);

return (
<button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
    <CartIcon/>
</span>
<span>Your Cart</span>
<span className={classes.badge}>{numOfCartItems}</span>
</button>

)

}

export default HeaderCartButton