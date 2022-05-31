import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import cartContext from '../store/cartContext';
import CartItem from "./CartItem";

const Cart = (props) => {

  //connect to cartcontext store
const cartctx = useContext(cartContext);


const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

const hasItems = cartctx.items.length > 0;

const removeCartItem = id => {cartctx.removeItem(id)};

const addCartItem = item => cartctx.addItem({...item, amount: 1});

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price}
        //the bind preconfigures function to take an id or item.
        onRemove={removeCartItem.bind(null, item.id)}
        onAdd={addCartItem.bind(null, item)}> {item.name}</CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>TOTAL AMOUNT</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
