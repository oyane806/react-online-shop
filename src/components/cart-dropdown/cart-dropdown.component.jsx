import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
