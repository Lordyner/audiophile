import React, { useState } from 'react';
import classes from './ProductPrice.module.css';
import * as Toast from '@radix-ui/react-toast';
import Link from 'next/link';

const ProductPrice = ({ price, onClickAddToCart, openToast, setOpenToast, productTitle }) => {

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
                <Toast.Provider swipeDirection="right" >
                    <button className='primary-link' onClick={() => onClickAddToCart(quantitySelected)}>Add to cart</button>
                    <Toast.Root open={openToast} onOpenChange={setOpenToast} className="ToastRoot">
                        <Toast.Title className="ToastTitle">Product added</Toast.Title>
                        <Toast.Description>{quantitySelected}x {productTitle} has been added to your cart.</Toast.Description>
                        <Toast.Action className="ToastAction" asChild altText="Goto my cart">
                            <Link href='/checkout' className="secondary-link">Checkout</Link>
                        </Toast.Action>
                    </Toast.Root>

                    <Toast.Viewport className="ToastViewport" />
                </Toast.Provider>
            </div>
        </div>
    );
};

export default ProductPrice;