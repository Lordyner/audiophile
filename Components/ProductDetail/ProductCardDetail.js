import React, { useContext } from 'react';
import classes from './ProductCardDetail.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import ProductPrice from '../ProductPrice';

const ProductCardDetail = ({ product, productImages }) => {


    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);
    const { cart, setCart } = useContext(GlobalContext);
    const { totalPrice, setTotalPrice } = useContext(GlobalContext);


    const handleAddProdutToCart = (quantitySelected) => {
        // If product is already in cart, we update quantity
        if (cart.find(item => item.title === product.title)) {
            const updatedCart = cart.map(item => {
                if (item.title === product.title) {
                    return { ...item, quantity: item.quantity + quantitySelected }
                }
                return item;
            });
            setCart(updatedCart);
            fetch('/api/addCartInCookies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCart),
            }).then(response => response.json())
        } else {
            // If product is not in cart, we add it
            setCart([...cart, { title: product.title, price: product.priceRange.maxVariantPrice.amount, quantity: quantitySelected, image: product.cartImage.reference.image }]);
            fetch('/api/addCartInCookies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([...cart, { title: product.title, price: product.priceRange.maxVariantPrice.amount, quantity: quantitySelected, image: product.cartImage.reference.image }]),
            }).then(response => response.json())

        }

        setTotalPrice(totalPrice + (product.priceRange.maxVariantPrice.amount * quantitySelected));


    };


    return (
        <div className={classes.productCard}>
            <Image
                src={isMobileResolution ? productImages[0].node.url : isTabletResolution ? productImages[1].node.url : productImages[2].node.url}
                alt={productImages[0].node.altText}
                className={classes.productImage}
                width={327}
                height={352}
            />
            <div className={classes.content}>
                {product.tags && <span className={classes.productTag}>{product.tags[0]}</span>}
                <h1 className={classes.productTitle}>{product.title} <br />{product.productType}</h1>
                <p className={classes.description}>{product.description}</p>
                <ProductPrice price={product.priceRange.maxVariantPrice.amount} onClickAddToCart={handleAddProdutToCart} />
            </div>
        </div>
    );
};

export default ProductCardDetail;