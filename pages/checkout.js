import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Head from "next/head";
import Cart from '@/Components/Cart';
import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';
import Breadcrumb from '@/Components/Layout/Breadcrumb';
import CheckoutForm from '@/Components/CheckoutForm';

export default function Checkout() {


    /* Logger */
    const logger = getLogger('Checkout');
    logger.debug('Checkout page rendered');

    /* State */
    const [screenWidth, setScreenWidth] = useState();

    /* Context */
    const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution, setIsTabletResolution } = useContext(GlobalContext);
    const { setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, desktopResolution } = useContext(GlobalContext);
    const { setIsLoading } = useContext(GlobalContext);
    const { isMenuOpen } = useContext(GlobalContext);
    const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
    const { toggleCart } = useContext(GlobalContext);

    /* Router */
    const router = useRouter();

    /* Functions */
    const handleMenuDisplay = () => {
        setScreenWidth(window.screen.width);

        const isMobile = screenWidth < tabletResolution;
        const isTablet = screenWidth >= tabletResolution && screenWidth < desktopResolution;
        const isDesktop = screenWidth >= desktopResolution;

        setIsMobileResolution(isMobile);
        setIsTabletResolution(isTablet);
        setIsDesktopResolution(isDesktop);
    }

    useEffect(() => {
        // Handle menu display
        handleMenuDisplay();
        window.addEventListener('resize', handleMenuDisplay);

        // Handle loading spinner
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));
    }, [screenWidth])




    return (
        <>
            <Head>
                <title>Checkout</title>
                <meta name="description" content="Audiophile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} /> */}
            {isCartOpen && <div id='popup-overlay' onClick={toggleCart} />}
            <Navbar />
            <div className='checkout-page'>

                <Breadcrumb bgColor='bg-color-grey' />
                <CheckoutForm />
                <Footer />
            </div>
        </>
    )
}