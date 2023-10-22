import { useEffect, useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import Product from "./Product";

const api = "https://fakestoreapi.com/products/";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // to manage new cart state

    useEffect(() => {
        axios.get(api)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    // adding addToCart function, but only for console log
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <Menu />
            <div className="productsList">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        {...product}
                        addToCart={addToCart}
                        cart={cart}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductsList;
