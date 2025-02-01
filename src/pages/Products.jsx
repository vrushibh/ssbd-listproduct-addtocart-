import { useEffect, useState } from "react";
import {fatchproducts} from "../services/api"
import ProductCard from "../components/ProductCard";
import "../styles/styles.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch products when the component loads
    useEffect(() => {
        const loadProducts = async () => {
            const data = await fatchproducts(); // Fetch products from the API
            setProducts(data); // Save the products in state
            setLoading(false); // Stop loading
        };

        loadProducts();
    }, []);

    // Show a loading message while fetching products
    if (loading) return <div className="loader"></div>;




    // Display the list of products
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;