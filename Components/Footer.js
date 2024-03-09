import React, { useContext } from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/shared/desktop/logo_white.svg';
import iconFacebook from '@/public/images/shared/desktop/facebook.svg';
import iconPinterest from '@/public/images/shared/desktop/pinterest.svg';
import iconTwitter from '@/public/images/shared/desktop/twitter.svg';
import iconYoutube from '@/public/images/shared/desktop/youtube.svg';
import iconInstagram from '@/public/images/shared/desktop/instagram.svg';

const Footer = () => {
    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.wrapper} max-width`}>
                <div className={classes.logoLinksAndSocials}>

                    <Link href="/" className={classes.logo}>
                        <Image src={logo} alt='logo payAPI' className={classes.logoImg} />
                    </Link>
                    <div className={classes.socialsAndLinks}>
                        <div className={classes.links}>
                            <Link href='/' className={classes.link}>Home</Link>
                            <Link href='/stories' className={classes.link}>Stories</Link>
                            <Link href='/features' className={classes.link}>Features</Link>
                            <Link href='/pricing' className={classes.link}>Pricing</Link>
                        </div>
                        <div className={classes.socialLinks}>
                            <a href="" className={classes.icon} target='_blank'>
                                <Image src={iconFacebook} alt='facebook' />
                            </a>
                            <a href="" className={classes.icon} target='_blank'>
                                <Image src={iconYoutube} alt='icon youtube' />
                            </a>
                            <a href="" className={classes.icon} target='_blank'>
                                <Image src={iconTwitter} alt='icon twitter' />
                            </a>
                            <a href="" className={classes.icon} target='_blank'>
                                <Image src={iconPinterest} alt='icon pinterest' />
                            </a>
                            <a href="" className={classes.icon} target='_blank'>
                                <Image src={iconInstagram} alt='icon instagram' />
                            </a>

                        </div>
                    </div>
                </div>
                <div className={classes.ctaAndCopyright}>
                    <Link href='' className={`secondary-link dark ${classes.cta}`}>Get an invite</Link>

                    <div className={classes.copyright}>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;