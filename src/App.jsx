import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../src/styles/styles.css';

const App = () => (
    <CartProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<Navigate to="/products" />} />
            </Routes>
            <ToastContainer position="top-right" />
        </Router>
    </CartProvider>
);

export default App;
