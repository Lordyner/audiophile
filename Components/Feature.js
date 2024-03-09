import Image from 'next/image';
import React from 'react';
import classes from './Feature.module.css';


const Feature = ({ index, image, alt, title, description }) => {
    return (
        <div key={index} className={classes.feature}>
            <div className={classes.logoWrapper}>
                <Image src={image} alt={alt} className={classes.logo} />
            </div>
            <div className={classes.text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Feature;