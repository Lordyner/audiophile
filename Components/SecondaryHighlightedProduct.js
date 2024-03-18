import React from 'react';
import classes from './SecondaryHighlightedProduct.module.css';
import Link from 'next/link';
const SecondaryHighlightedProduct = () => {
    return (
        <div className={classes.card}>
            <div className={classes.content}>
                <h3>ZX7 Speaker</h3>
                <Link href="product/zx7" className={`secondary-link `}>See Product</Link>
            </div>
        </div>
    );
};

export default SecondaryHighlightedProduct;