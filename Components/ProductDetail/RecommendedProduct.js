import React, { useContext } from 'react';
import classes from './RecommendedProduct.module.css';
import Image from 'next/image';
import Link from 'next/link';
import GlobalContext from '@/Store/GlobalContext';
const RecommendedProduct = ({ title, images, handle }) => {

    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);
    console.log(images)
    return (
        <div className={classes.card}>
            <div className={classes.imgWrapper}>
                <Image
                    src={isMobileResolution ? images.references.nodes[0].image.url : isTabletResolution ? images.references.nodes[1].image.url : images.references.nodes[2].image.url}
                    alt={images.references.nodes[0].image.altText}
                    className={classes.productImage}
                    width={isMobileResolution ? images.references.nodes[0].image.width : isTabletResolution ? images.references.nodes[1].image.width : images.references.nodes[2].image.width}
                    height={isMobileResolution ? images.references.nodes[0].image.height : isTabletResolution ? images.references.nodes[1].image.height : images.references.nodes[2].image.height}
                />
            </div>
            <div className={classes.textContent}>
                <h3 className={classes.title}>{title}</h3>
                <Link href={`/product/${handle}`} className='primary-link'>See product</Link>
            </div>
        </div>
    );
};

export default RecommendedProduct;