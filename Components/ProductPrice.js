import React, { useState } from 'react';
import classes from './ProductPrice.module.css';
const ProductPrice = ({ price }) => {

    const [quantitySelected, setQuantitySelected] = useState(1);
    const formattedPrice = `$${price.split('.')[0]}`;
    const formattedPriceWithComma = formattedPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return (
        <div className={classes.priceSection}>
            <p className={classes.price}>{formattedPriceWithComma}</p>
            <div className={classes.addToCart}>
                <div className={classes.quantitySelector}>
                    <button className={classes.buttonQuantity} onClick={() => setQuantitySelected(quantitySelected - 1)}>-</button>
                    <p>{quantitySelected}</p>
                    <button className={classes.buttonQuantity} onClick={() => setQuantitySelected(quantitySelected + 1)}>+</button>
                </div>
                <button className='primary-link'>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductPrice;