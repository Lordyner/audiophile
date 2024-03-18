import React, { useContext } from 'react';
import classes from './ProductCardDetail.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import ProductPrice from '../ProductPrice';
const ProductCardDetail = ({ product, productImages }) => {


    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);
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
                <ProductPrice price={product.priceRange.maxVariantPrice.amount} />
            </div>
        </div>
    );
};

export default ProductCardDetail;