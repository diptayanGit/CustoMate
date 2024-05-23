import React, { useContext } from "react";
import { StorageContext } from "../context/StorageContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import ProductDisplay from "../components/ProductDisplay";

function Product(){
    const { all_product } = useContext(StorageContext);
    const { productId } = useParams();
    const product = all_product.find((prod) => prod.id === Number(productId));
    return (
        <div className="mx-40 mt-5">
            <Breadcrum {...product}/>
            <ProductDisplay {...product} />
        </div>
    )
}

export default Product;