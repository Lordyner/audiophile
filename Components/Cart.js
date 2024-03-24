import React, { useContext, useEffect } from 'react';
import classes from './Cart.module.css';
import GlobalContext from '@/Store/GlobalContext';
import Image from 'next/image';
import Link from 'next/link';
const Cart = () => {

    const { cart, setCart } = useContext(GlobalContext);
    const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);

    const handleRemoveAllProducts = () => {
        setCart([]);
        fetch('/api/deleteCartInCookies').then(response => response.json()).then(data => {
            console.log(data);
        });

    }

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
        fetch('/api/addCartInCookies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCart),
        }).then(response => response.json())
    }

    let totalPrice = 0;
    cart.forEach((product) => {
        totalPrice += product.price * product.quantity;
    })
    let formattedPrice = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(totalPrice);



    return (
        <div className={classes.cart}>
            <div className={classes.cartHeader}>
                <h3 className={classes.cartTitle}>Cart ({cart.length})</h3>
                {cart.length > 0 && <button className={classes.cleanCartButton} onClick={handleRemoveAllProducts}>Remove all</button>}
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
                <Link href="/checkout" onClick={() => {
                    setIsCartOpen(false)
                    document.body.style.overflow = 'auto';
                }} className='primary-link'>Checkout</Link>
            </div>
        </div>

    );
};

export default Cart;