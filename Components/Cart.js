import React, { useContext, useEffect } from 'react';
import classes from './Cart.module.css';
import GlobalContext from '@/Store/GlobalContext';
import Image from 'next/image';
import Link from 'next/link';
const Cart = () => {

    const { cart, setCart } = useContext(GlobalContext);
    const { cartModalRef } = useContext(GlobalContext);

    const handleClickOnQuantity = (index, operation) => {
        const updatedCart =

            cart.map((product, i) => {
                if (product.quantity === 0 && operation === "minus") {

                } else if (i === index) {
                    return { ...product, quantity: operation === "add" ? product.quantity + 1 : product.quantity - 1 }
                }
                return product;
            }).filter(product => product.quantity > 0);

        setCart(updatedCart);

    }

    let totalPrice = 0;
    cart.forEach((product) => {
        totalPrice += product.price * product.quantity;
    })
    let formattedPrice = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(totalPrice);

    const handleClickOutside = (e) => {
        let rect = cartModalRef.current.getBoundingClientRect();
        let isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            cartModalRef.current.close();
        }
    }

    return (
        <div className={classes.container}>
            <dialog className={classes.cart} ref={cartModalRef} onClick={handleClickOutside}>
                <div className={classes.cartHeader}>
                    <h3 className={classes.cartTitle}>Cart ({cart.length})</h3>
                    {cart.length > 0 && <button className={classes.cleanCartButton} onClick={() => setCart([])}>Remove all</button>}
                </div>
                <div className={classes.cartContent}>
                    {cart.map((product, index) => {
                        return (
                            <div key={index} className={classes.cartProduct}>
                                <Image src={product.image.url}
                                    alt={product.image.altText}
                                    className={classes.cartProductImage}
                                    width={product.image.width}
                                    height={product.image.height}
                                />
                                <div className={classes.productContent}>
                                    <div>
                                        <h4 className={classes.cartProductTitle}>{product.title}</h4>
                                        <p className={classes.cartProductPrice}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(product.price)}</p>
                                    </div>
                                    <div className={classes.quantitySelector}>
                                        <button className={classes.buttonQuantity} onClick={() => handleClickOnQuantity(index, "minus")}>-</button>
                                        <p>{product.quantity}</p>
                                        <button className={classes.buttonQuantity} onClick={() => handleClickOnQuantity(index, "add")}>+</button>
                                    </div>
                                </div>
                            </div>
                        );

                    })}
                </div>
                <div className={classes.cartFooter}>
                    <div className={classes.priceSection}>
                        <p className={classes.total}>Total</p>
                        <p className={classes.price}>{formattedPrice}</p>
                    </div>
                    <Link href="/checkout" className='primary-link'>Checkout</Link>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;