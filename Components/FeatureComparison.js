import React, { useContext } from 'react';
import classes from './FeatureComparison.module.css';
import iconCheck from '@/public/images/pricing/desktop/check.svg';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';

const FeatureComparison = ({ title, isBasic, isPro, isBusiness }) => {

    const { isMobileResolution } = useContext(GlobalContext);


    return (
        <div className={classes.feature}>
            <h4>{title}</h4>
            <div className={classes.featureRow}>
                <div className={classes.cell}>
                    {isMobileResolution && <p>Basic</p>}
                    {isBasic && <Image src={iconCheck} alt='Check' />}
                </div>
                <div className={classes.cell}>
                    {isMobileResolution && <p>Pro</p>}
                    {isPro && <Image src={iconCheck} alt='Check' />}

                </div>
                <div className={classes.cell}>
                    {isMobileResolution && <p>Business</p>}
                    {isBusiness && <Image src={iconCheck} alt='Check' />}
                </div>
            </div>
        </div>
    );
};

export default FeatureComparison;