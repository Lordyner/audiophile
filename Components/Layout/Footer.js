import React, { useContext } from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '../../public/images/shared/desktop/logo.svg';
import iconFacebook from '../../public/images/shared/desktop/icon-facebook.svg';
import iconTwitter from '../../public/images/shared/desktop/icon-twitter.svg';
import iconInstagram from '../../public/images/shared/desktop/icon-instagram.svg';

const Footer = () => {
    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.wrapper} max-width`}>
                <div className={classes.textContent}>
                    <div className={classes.logoAndLinks}>
                        <Link href="/" className={classes.logo}>
                            <Image src={logo} alt='logo audiophile' className={classes.logoImg} />
                        </Link>
                        <div className={classes.links}>
                            <Link href='/' className={classes.link}>Home</Link>
                            <Link href='/' className={classes.link}>Headphones</Link>
                            <Link href='/' className={classes.link}>Speakers</Link>
                            <Link href='/' className={classes.link}>Earphones</Link>

                        </div>
                    </div>
                    <p className={classes.valueProposition}>Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
                </div>
                <div className={classes.copyrightAndSocial}>

                    <div className={classes.copyright}>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </div>
                    <div className={classes.socialLinks}>
                        <a href="" className={classes.icon} target='_blank'>
                            <Image src={iconFacebook} alt='facebook' />
                        </a>
                        <a href="" className={classes.icon} target='_blank'>
                            <Image src={iconTwitter} alt='icon youtube' />
                        </a>
                        <a href="" className={classes.icon} target='_blank'>
                            <Image src={iconInstagram} alt='icon twitter' />
                        </a>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;