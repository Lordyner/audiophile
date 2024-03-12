import React, { useContext } from 'react';
import classes from './TertiaryHighlightedProduct.module.css';
import Image from 'next/image';
import imageEarphoneMobile from '../public/images/home/mobile/image-earphones-yx1.jpg';
import imageEarphoneTablet from '../public/images/home/tablet/image-earphones-yx1.jpg';
import imageEarphoneDesktop from '../public/images/home/desktop/image-earphones-yx1.jpg';
import Link from 'next/link';
import GlobalContext from '@/Store/GlobalContext';

const TertiaryHighlightedProduct = () => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);

    return (
        <div className={classes.container}>
            {/* <div className={classes.imageContainer}> */}
            <Image src={isMobileResolution ? imageEarphoneMobile : isTabletResolution ? imageEarphoneTablet : imageEarphoneDesktop}
                alt="Earphones" className={classes.productImg}
            />
            {/* </div> */}
            <div className={classes.textContainer}>
                <h2>YX1 earphones</h2>
                <Link href='' className={'secondary-link'}>See product</Link>
            </div>
        </div>
    );
};

export default TertiaryHighlightedProduct;