import { useEffect, useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import Product from "./Product";
const api = "https://fakestoreapi.com/products/";

const { data: products } = await axios.get(api)



const ProductsList = () => {

    console.log(products)

    return (
        <div>
            <Menu />

            <div className="productsList">
                {products.map((product) => (
                    <Product key={product?.id} {...product} />
                ))
                }
            </div>
        </div>
    )
}

export default ProductsList;