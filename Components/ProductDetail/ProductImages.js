import React, { useContext } from 'react';
import classes from './ProductImages.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
const ProductImages = ({ product }) => {

    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);

    const firstImages = product.additionnalProductImages.references.nodes.filter((image, index) => {
        if (image.image.url.includes('gallery-1')) {
            return image;
        }
    }).map((image) => { return image.image })
    const secondImages = product.additionnalProductImages.references.nodes.filter((image, index) => {
        if (image.image.url.includes('gallery-2')) {
            return image;
        }
    }).map((image) => { return image.image })

    const thirdImages = product.additionnalProductImages.references.nodes.filter((image, index) => {
        if (image.image.url.includes('gallery-3')) {
            return image;
        }
    }).map((image) => { return image.image })

    return (
        <div className={classes.images}>
            <Image
                className={`${classes.productImage} ${classes.primary}`}
                src={isMobileResolution ? firstImages[0].url : isTabletResolution ? firstImages[1].url : firstImages[2].url}
                alt={firstImages[0].altText}
                width={isMobileResolution ? firstImages[0].width : isTabletResolution ? secondImages[0].width : thirdImages[0].width}
                height={isMobileResolution ? firstImages[0].height : isTabletResolution ? secondImages[0].height : thirdImages[0].height}
            />
            <Image
                className={`${classes.productImage} ${classes.secondary}`}
                src={isMobileResolution ? secondImages[0].url : isTabletResolution ? secondImages[1].url : secondImages[2].url}
                alt={secondImages[0].altText}
                width={isMobileResolution ? secondImages[0].width : isTabletResolution ? secondImages[1].width : secondImages[2].width}
                height={isMobileResolution ? secondImages[0].height : isTabletResolution ? secondImages[1].height : secondImages[2].height}
            />
            <Image
                className={`${classes.productImage} ${classes.tertiary}`}
                src={isMobileResolution ? thirdImages[0].url : isTabletResolution ? thirdImages[1].url : thirdImages[2].url}
                alt={thirdImages[0].altText}
                width={isMobileResolution ? thirdImages[0].width : isTabletResolution ? thirdImages[1].width : thirdImages[2].width}
                height={isMobileResolution ? thirdImages[0].height : isTabletResolution ? thirdImages[1].height : thirdImages[2].height}
            />
        </div>
    );
};

export default ProductImages;