import axios from "axios";

export const fatchproducts = async() => {

    const url = "https://fakestoreapi.com/products?limit=30";
    
    try{
        const response = await axios.get(url)
        return response.data;
    }
    catch (error)
    {
        console.error("error while fatching products ", error );
        return [];
    }
};