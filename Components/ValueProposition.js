import React, { useContext } from 'react';
import classes from './ValueProposition.module.css';
import Image from 'next/image';
import valuePropositionMobile from '../public/images/shared/mobile/image-best-gear.jpg';
import valuePropositionTablet from '../public/images/shared/tablet/image-best-gear.jpg';
import valuePropositionDesktop from '../public/images/shared/desktop/image-best-gear.jpg';
import GlobalContext from '@/Store/GlobalContext';

const ValueProposition = () => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);

    return (
        <div className={classes.valueProposition}>
            <div className={classes.wrapper}>
                <Image src={isMobileResolution ? valuePropositionMobile : isTabletResolution ? valuePropositionTablet : valuePropositionDesktop}
                    alt="Man wearing headphones looking away from the camera."
                    className={classes.valueImg} />
            </div>
            <div className={classes.textContent}>
                <h2>Bringing you the <span className={classes.highlighted}>best</span><br /> audio gear</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    );
};

export default ValueProposition;