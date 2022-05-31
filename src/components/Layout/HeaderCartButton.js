import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cartContext';
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = props => {

const [btnHighlight, setBtnHighlight] = useState(false);

const cartContext = useContext(CartContext);

//.reduce() takes 2 arguments. First argument is a function, and the second argument is a starting value.
const numOfCartItems = cartContext.items.reduce((current, item) => {return current + item.amount;}, 0);

const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;

const { items } = cartContext;

useEffect(() => {
    if (items.length === 0) {
        return}

setBtnHighlight(true);

const timer = setTimeout(() => {setBtnHighlight(false)}, 300);


//return a cleanup function.
return () => {clearTimeout(timer)};

}, [items]);




return (
<button className={btnClasses} onClick={props.onClick}>
<span className={classes.icon}>
    <CartIcon/>
</span>
<span>Your Cart</span>
<span className={classes.badge}>{numOfCartItems}</span>
</button>

)

}

export default HeaderCartButton