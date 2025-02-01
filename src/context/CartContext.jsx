import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
         
            existingProduct.quantity += 1;
            setCart([...cart]); // Update cart state
        } else {
            // If the product is not in the cart then added 1 quentity
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // to remove
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    //  to Update cart
    const updateQuantity = (id, quantity) => {
        const product = cart.find((item) => item.id === id);

        if (product) {
            // Ensure the quantity doesn't go below 1
            product.quantity = Math.max(1, quantity);
            setCart([...cart]); // Update the cart state
        }
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
