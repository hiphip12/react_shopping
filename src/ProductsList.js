import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
const api = "https://fakestoreapi.com/products/";

const { data: products } = await axios.get(api)

const ProductsList = () => {

    console.log(products)

    return (
        <div className="productsList">
            {products.map((product) => (
                <Product key={product?.id} {...product} />
            ))
            }
        </div>
    )
}

export default ProductsList;