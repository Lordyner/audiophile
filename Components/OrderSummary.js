import React from 'react';
import classes from './OrderSummary.module.css';
import GlobalContext from '@/Store/GlobalContext';
import { useContext } from 'react';
import Image from 'next/image';
const OrderSummary = () => {


    const { cart } = useContext(GlobalContext);

    const { grandTotalPrice, setGrandTotalPrice } = useContext(GlobalContext);
    const { totalPrice } = useContext(GlobalContext);
    return (
        <div className={classes.container}>
            <h2 className={classes.summaryTitle}>Summary</h2>
            {cart.length > 0 && <>
                <div className={classes.products}>
                    {cart.map((product, index) => {
                        return (
                            <div key={index} className={classes.product}>
                                <div className={classes.imageAndTitleAndPrice}>
                                    <Image src={product.image.url}
                                        width={product.image.width}
                                        height={product.image.height}
                                        alt={product.image.altText}
                                        className={classes.productImage} />
                                    <div className={classes.titleAndPrice}>
                                        <h3 className={classes.productTitle}>{product.title}</h3>
                                        <p className={classes.price}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(product.price)}</p>
                                    </div>
                                </div>
                                <p className={classes.quantity}>{product.quantity} x</p>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.priceSection}>
                    <div className={classes.priceDetail}>
                        <p className={classes.detailLabel}>Total</p>
                        <p className={classes.detailPrice}> {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(totalPrice)}</p>
                    </div>
                    <div className={classes.priceDetail}>
                        <p className={classes.detailLabel}>Shipping</p>
                        <p className={classes.detailPrice}> {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(50)}</p>
                    </div>
                    <div className={classes.priceDetail}>
                        <p className={classes.detailLabel}>VAT (Included)</p>
                        <p className={classes.detailPrice}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(totalPrice * .2)}</p>
                    </div>
                    <div className={classes.priceDetail}>
                        <p className={classes.detailLabel}>Grand Total</p>
                        <p className={`${classes.detailPrice} ${classes.bigPrice}`}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(totalPrice + (totalPrice * .2) + 50)}</p>
                    </div>
                </div>
                <div className={classes.buttonWrapper}>
                    <button type='submit' className={`primary-link ${classes.CTA}`}>Continue & Pay</button>
                </div>
            </>
            }
        </div>
    );
};

export default OrderSummary;