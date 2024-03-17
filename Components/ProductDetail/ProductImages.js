import React, { useContext } from 'react';
import classes from './ProductImages.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
const ProductImages = ({ product }) => {

    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);
    console.log(product)
    const firstImages = product.images.edges.filter((image, index) => {
        if (image.node.url.includes('gallery-1')) {
            return image.node;
        }
    }).map((image) => { return image.node })
    const secondImages = product.images.edges.filter((image, index) => {
        if (image.node.url.includes('gallery-2')) {
            return image.node;
        }
    }).map((image) => { return image.node })

    const thirdImages = product.images.edges.filter((image, index) => {
        if (image.node.url.includes('gallery-3')) {
            return image.node;
        }
    }).map((image) => { return image.node })


    return (
        <div className={classes.images}>
            <Image
                className={classes.productImage}
                src={isMobileResolution ? firstImages[0].url : isTabletResolution ? firstImages[1].url : firstImages[2].url}
                alt="Product image"
                width={isMobileResolution ? firstImages[0].width : isTabletResolution ? secondImages[0].width : thirdImages[0].width}
                height={isMobileResolution ? firstImages[0].height : isTabletResolution ? secondImages[0].height : thirdImages[0].height}
            />
            <Image
                className={classes.productImage}
                src={isMobileResolution ? secondImages[0].url : isTabletResolution ? secondImages[1].url : secondImages[2].url}
                alt="Product image"
                width={isMobileResolution ? firstImages[1].width : isTabletResolution ? secondImages[1].width : thirdImages[1].width}
                height={isMobileResolution ? firstImages[1].height : isTabletResolution ? secondImages[1].height : thirdImages[1].height}
            />
            <Image
                className={classes.productImage}
                src={isMobileResolution ? thirdImages[0].url : isTabletResolution ? thirdImages[1].url : thirdImages[2].url}
                alt="Product image"
                width={isMobileResolution ? firstImages[2].width : isTabletResolution ? secondImages[2].width : thirdImages[2].width}
                height={isMobileResolution ? firstImages[2].height : isTabletResolution ? secondImages[2].height : thirdImages[2].height}
            />
        </div>
    );
};

export default ProductImages;