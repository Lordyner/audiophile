import React from 'react';
import classes from './ProductDetailContainer.module.css';
const ProductDetailContainer = ({ children }) => {
    return (
        <div className={`${classes.container} max-width`}>
            {children}
        </div>
    );
};

export default ProductDetailContainer;