import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  console.log(cartItem);
  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;
  const addToCart = () => {
    addItemToCart(cartItem);
  };
  const removeToCart = () => {
    removeItemToCart(cartItem);
  };
  const clearToCart = () => {
    clearItemToCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeToCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearToCart}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
