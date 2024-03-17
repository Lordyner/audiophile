import React from 'react';
import classes from './ProductCardContainer.module.css';
const ProductCardContainer = ({ children }) => {
    return (
        <div className={`${classes.productCardContainer} max-width`}>
            {children}
        </div>
    );
};

export default ProductCardContainer;