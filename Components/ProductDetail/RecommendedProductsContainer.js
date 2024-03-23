import React from 'react';
import classes from './RecommendedProductsContainer.module.css';
const RecommendedProductsContainer = ({ children }) => {
    return (
        <div className={`${classes.container} max-width`}>


            <h2 className={classes.title}>You may also like</h2>
            <div className={classes.wrapper}>
                {children}
            </div>
        </div>
    );
};

export default RecommendedProductsContainer;