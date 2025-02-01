import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {toast} from "react-toastify";

const ProductCard = ({ product }) => {
    const {addToCart} = useContext(CartContext);

    const handleAddToCart = () => {

        addToCart(product);
        toast.success("Added to Cart Successfully !");

    };

    return(
        <div className="product-card">
            <img src={product.image} alt={product.title}/>
            <h4>
                {product.title}
            </h4>
            <p>
            <span>${product.price.toFixed(2)}</span> 
            <span>Rate:{product.rating.rate}</span>
            </p>
          

            <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
    );
};

export default ProductCard;