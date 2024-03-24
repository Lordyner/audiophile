import React, { useContext, useEffect } from 'react';
import classes from './Cart.module.css';
import GlobalContext from '@/Store/GlobalContext';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Cart = () => {

    const { cart, setCart } = useContext(GlobalContext);
    const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
    const { totalPrice, setTotalPrice } = useContext(GlobalContext);
    const router = useRouter();
    const handleRemoveAllProducts = () => {
        // Remove all products from cart
        setCart([]);

        // Remove cart from cookies
        fetch('/api/deleteCartInCookies').then(response => response.json()).then(data => {
            console.log(data);
        });

        // Update total price
        setTotalPrice(0);
    }

    useEffect(() => {
        // Calculate total price when the cart is not empty (cookies) but the price is 0
        if (totalPrice === 0 && cart.length > 0) {
            let totalPrice = 0;
            cart.forEach(product => {
                totalPrice = totalPrice + (product.price * product.quantity);
            });
            setTotalPrice(totalPrice);
        }
    })

    const handleClickOnQuantity = (index, operation, productPrice) => {

        // Add or remove product from cart
        const updatedCart =
            cart.map((product, i) => {
                if (product.quantity === 0 && operation === "minus") {

                } else if (i === index) {
                    return { ...product, quantity: operation === "add" ? product.quantity + 1 : product.quantity - 1 }
                }
                return product;
            }).filter(product => product.quantity > 0);

        // Update total price
        if (operation === "add") {
            setTotalPrice(totalPrice + +productPrice);
        } else {
            setTotalPrice(totalPrice - +productPrice);
        }

        // Update cart
        setCart(updatedCart);

        // Update cart in cookies
        fetch('/api/addCartInCookies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCart),
        }).then(response => response.json())
    }


    return (
        <div className={classes.cart}>
            <div className={classes.cartHeader}>
                <h3 className={classes.cartTitle}>Cart ({cart.length})</h3>
                {cart.length > 0 && <button className={classes.cleanCartButton} onClick={handleRemoveAllProducts} type='button'>Remove all</button>}
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
                                    <button className={classes.buttonQuantity} onClick={() => handleClickOnQuantity(index, "minus", product.price)}>-</button>
                                    <p>{product.quantity}</p>
                                    <button className={classes.buttonQuantity} onClick={() => handleClickOnQuantity(index, "add", product.price)}>+</button>
                                </div>
                            </div>
                        </div>
                    );

                })}
            </div>
            <div className={classes.cartFooter}>
                <div className={classes.priceSection}>
                    <p className={classes.total}>Total</p>
                    {/* <p className={classes.price}>{formattedPrice}</p> */}
                    <p className={classes.price}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(totalPrice)}</p>
                </div>
                <button onClick={() => {
                    if (cart.length === 0) {
                        return;
                    }
                    router.push('/checkout').then(() => {
                        setIsCartOpen(false)
                        document.body.style.overflow = 'auto';
                    });
                }}
                    disabled={cart.length === 0}
                    className={`primary-link ${cart.length === 0 ? 'disabled' : ''}`}>Checkout</button>
            </div>
        </div>

    );
};

export default Cart;