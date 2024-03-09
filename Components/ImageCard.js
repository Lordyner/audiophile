import React from 'react';
import classes from './ImageCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageCard = ({ image, alt, title, author, CTA, date }) => {



    return (
        <motion.div
            whileHover={{
                y: -24,
                transition: { duration: 0.25 }
            }}
            className={`${classes.card} `}>
            <Image src={image} alt={alt} className={classes.cardImg} />
            <div className={classes.text}>
                <div className={classes.info}>
                    {date && <p className={classes.date}>{date}</p>}
                    <h3>{title}</h3>
                    <p className={classes.author}>by {author}</p>
                </div>
                <div className={classes.separator} />
                <Link className={classes.CTA} href=''>
                    <p className={classes.textCTA}>{CTA}</p>
                    <p className={classes.arrowCTA}></p>
                </Link>
            </div>
        </motion.div>
    );
};

export default ImageCard;