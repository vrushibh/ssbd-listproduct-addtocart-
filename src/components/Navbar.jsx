import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const location = useLocation(); // Get current route

    return (
        <nav className="navbar">
            <Link 
                to="/products" 
                className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}
            >
                Products
            </Link>
            <Link 
                to="/cart" 
                className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`}
            >
                Cart ({cart.length})
            </Link>
        </nav>
    );
};

export default Navbar;
