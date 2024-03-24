import GlobalContext from '@/Store/GlobalContext';
import React, { useContext } from 'react';
import classes from './OrderConfirmation.module.css';
import Image from 'next/image';
import iconOrderConfirmation from '@/public/images/checkout/icon-order-confirmation.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const OrderConfirmation = () => {

    const { confirmationDialog } = useContext(GlobalContext);
    const { cart } = useContext(GlobalContext);
    const { totalPrice } = useContext(GlobalContext);
    const { setCart } = useContext(GlobalContext);
    const { setTotalPrice } = useContext(GlobalContext);
    const router = useRouter();

    // Handle close dialog with escape key
    const handleCloseDialog = () => {
        router.push('/').then(() => {
            setCart([]);

            // Remove cart from cookies
            fetch('/api/deleteCartInCookies').then(response => response.json()).then(data => {
                console.log(data);
            });

            // Update total price
            setTotalPrice(0);
        });
    };



    return (
        <dialog ref={confirmationDialog} className={classes.confirmationDialog} onClose={handleCloseDialog}>
            <Image src={iconOrderConfirmation} alt="Order confirmation icon" className={classes.iconOrder} />
            <h1 className={classes.dialogTitle}>Thank you<br /> for your order</h1>
            <p className={classes.confirmation}>You will receive an email confirmation shortly</p>
            <div className={classes.summary}>
                <div className={classes.header}>
                    <div className={classes.products}>
                        <div className={classes.imagePriceAndName}>
                            <Image
                                src={cart[0].image.url}
                                width={cart[0].image.width}
                                height={cart[0].image.height}
                                alt={cart[0].image.altText}
                                className={classes.productImage}
                            />
                            <div className={classes.priceAndName}>
                                <p className={classes.name}>{cart[0].title}</p>
                                <p className={classes.price}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(cart[0].price)}</p>
                            </div>
                        </div>
                        <p className={classes.quantity}>x{cart[0].quantity}</p>
                    </div>
                    {cart.length > 1 && <>
                        <div className={classes.separator}></div>
                        <p className={classes.additionnalInfo}>and {cart.length - 1} other item(s)</p>
                    </>
                    }
                </div>

                <div className={classes.footer}>
                    <p className={classes.grandTotal}>Grand total</p>
                    <p className={classes.grandTotalPrice}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(totalPrice + (totalPrice * .2) + 50)}</p>
                </div>

            </div>
            <div className={classes.buttonWrapper}>
                <button className={`primary-link ${classes.CTA}`} onClick={handleCloseDialog}>Back to home</button>
            </div>
        </dialog>
    );
};

export default OrderConfirmation;