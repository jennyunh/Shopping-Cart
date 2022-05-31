import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import { useState } from 'react';

//Gives access to the Cart Context Store.
import CartProvider from "./components/store/cartProvider";

function App() {

const [cartVisible, setCartVisible] = useState(false);

const showCartHandler = () => {
setCartVisible(true);
}

const hideCartHandler = () => {
setCartVisible(false);
}

  return (
    <CartProvider>
    {cartVisible && <Cart onClose={hideCartHandler}/>}
  <Header onShowCart={showCartHandler}/>

  <main>
<Meals/>

  </main>
  </CartProvider>
  )
}

export default App;
