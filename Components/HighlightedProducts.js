import React, { useContext } from 'react';
import classes from './HighlightedProducts.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imageZx9Desktop from '../public/images/home/desktop/image-speaker-zx9.png';
import imageZx9Tablet from '../public/images/home/tablet/image-speaker-zx9.png';
import imageZx9Mobile from '../public/images/home/mobile/image-speaker-zx9.png';
import GlobalContext from '@/Store/GlobalContext';
import SecondaryHighlightedProduct from './SecondaryHighlightedProduct';
import TertiaryHighlightedProduct from './TertiaryHighlightedProduct';

const HighlightedProducts = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);

    return (
        <section className={`${classes.highlightedProducts} max-width`}>
            <div className={classes.wrapper}>

                <div className={classes.mainHighlight}>
                    <div className={classes.imageWrapper}>
                        <Image className={classes.speakerImg} src={isMobileResolution ? imageZx9Mobile : isTabletResolution ? imageZx9Tablet : imageZx9Desktop} alt='ZX9 Speaker' />
                    </div>
                    <div className={classes.textContent}>
                        <h2>ZX9 <br />Speaker</h2>
                        <p className={classes.description}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Link href="" className={`secondary-link ${classes.seeProductButton} `}>See Product</Link>
                    </div>
                </div>
                <SecondaryHighlightedProduct />
                <TertiaryHighlightedProduct />
            </div>
        </section>
    );
};

export default HighlightedProducts;