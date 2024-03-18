import React from 'react';
import Link from 'next/link';
import classes from './Hero.module.css';
const Hero = () => {

    return (
        <div className={`${classes.hero}`}>
            <div className={classes.bgImageWrapper}>

            </div>
            <div className={`${classes.wrapper} max-width`}>
                <p className={classes.tag}>New product</p>
                <h1>XX99 Mark II <br />Headphones</h1>
                <p className={classes.description}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link className='primary-link' href='/product/xx99-mark-ii'>See product</Link>
            </div>
        </div>
    );
};

export default Hero;