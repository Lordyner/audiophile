import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Hero.module.css';
import imageHeroDesktop from '../public/images/home/desktop/image-hero.jpg';
const Hero = () => {

    return (
        <div className={`${classes.hero}`}>
            <div className={classes.bgImageWrapper}>

            </div>
            <div className={`${classes.wrapper} max-width`}>
                <p className={classes.tag}>New product</p>
                <h1>XX99 Mark II <br />Headphones</h1>
                <p className={classes.description}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link className='primary-link' href='/'>See product</Link>
            </div>
        </div>
    );
};

export default Hero;