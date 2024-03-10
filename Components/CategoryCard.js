import React from 'react';
import classes from './CategoryCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
const CategoryCard = ({ name, image, alt }) => {
    return (
        <div className={classes.card}>
            <Image src={image} alt={alt} className={classes.thumbnail} />
            <div className={classes.text}>
                <h3 className={classes.categoryName}>{name}</h3>
                <Link className={`${classes.shoppingLink} tertiary-link`} href='/'>Shop</Link>
            </div>
        </div>
    );
};

export default CategoryCard;