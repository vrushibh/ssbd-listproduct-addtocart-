import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
            </div>
            <div className="cart-page">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>${item.price.toFixed(2)} x {item.quantity}</p>
                            <div className="quantity-buttons">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button
                                className="remove-button"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Cart;
