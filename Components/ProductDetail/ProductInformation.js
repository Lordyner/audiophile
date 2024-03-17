import React from 'react';
import classes from './ProductInformation.module.css';
import ProductFeatures from './ProductFeatures';
import ProductInTheBox from './ProductInTheBox';
const ProductInformation = ({ product }) => {

    return (
        <div className={classes.productInformation}>
            <ProductFeatures features={product.features.value} />
            <ProductInTheBox inTheBox={product.inTheBox.value} />
        </div>
    );
};

export default ProductInformation;