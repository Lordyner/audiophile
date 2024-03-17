import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/shared/desktop/logo.svg';
import iconChart from '@/public/images/shared/desktop/icon-cart.svg';
import CategoryCardContainer from '../CategoryCardContainer';

const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);

    const { isMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);



    return (
        <header className={`${classes.header}`}>
            <nav className={`${classes.navbar} max-width`}>

                {/* Icon burger menu */}
                <div ref={burger} className={`${(isMobileResolution || isTabletResolution) ? classes.hamburger : classes.hamburger + " display-none"} ${isMenuOpen ? classes.isActive : ''}`}
                    onClick={() => {
                        toggleMenu();
                        // burger.current.classList.toggle(classes.isActive);

                    }}>
                    <div className={classes.bar} />
                </div>

                <div className={classes.logo}>
                    <Link href="/">
                        <Image src={logo} alt='logo photosnap' className={classes.logoImg} />
                    </Link>
                </div>
                <div className={classes.iconChartWrapper}>
                    <button className={classes.iconChartButton}>
                        <Image src={iconChart} className={classes.iconChart} alt='icon chart' />
                    </button>
                </div>

                {/* Classic links */}
                <div className={`${(isMobileResolution || isTabletResolution) ? "display-none" : classes.navLink}`}>

                    <Link href="/" className={classes.link}>Home</Link>
                    <Link href="/category/headphones" className={classes.link}>Headphones</Link>
                    <Link href="/category/speakers" className={classes.link}>Speakers</Link>
                    <Link href="/category/earphones" className={classes.link}>Earphones</Link>
                </div>


                {/* Mobile menu */}
                <div className={`${classes.mobileNav} ${isMenuOpen ? classes.active : ""}`}>
                    <div className={classes.mobileNavWrapper}>
                        <CategoryCardContainer onClickCategory={toggleMenu} />
                    </div>
                </div>

            </nav>
        </header >
    );
};

export default Navbar;