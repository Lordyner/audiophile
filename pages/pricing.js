import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { getLogger } from "@/Logging/log-util";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import heroMobile from '@/public/images/pricing/mobile/hero.jpg';
import heroTablet from '@/public/images/pricing/tablet/hero.jpg';
import heroDesktop from '@/public/images/pricing/desktop/hero.jpg';
import PriceContainer from "@/Components/PriceContainer";
import Switch from "@/Components/UI/Switch";
import Footer from "@/Components/Footer";
import CTAReminder from "@/Components/CTAReminder";
import FeaturesComparison from "@/Components/FeaturesComparison";


export default function Pricing() {
    /* Logger */
    const logger = getLogger('Pricing');
    logger.debug('Pricing page rendered');

    /* State */
    const [screenWidth, setScreenWidth] = useState();
    const [isMonthly, setIsMonthly] = useState(true);

    /* Context */
    const { setIsMobileResolution, isMobileResolution } = useContext(GlobalContext);
    const { setIsTabletResolution, isTabletResolution } = useContext(GlobalContext);
    const { setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, desktopResolution } = useContext(GlobalContext);
    const { setIsLoading } = useContext(GlobalContext);
    const { isMenuOpen } = useContext(GlobalContext);

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

    }, [screenWidth, isMonthly])


    return (
        <>
            <Head>
                <title>MyTeam</title>
                <meta name="description" content="Create and share your photo stories" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
            <Navbar />
            <Hero image={isMobileResolution ? heroMobile : isTabletResolution ? heroTablet : heroDesktop}
                alt='man holding a camera in under a sunset'
                title='Pricing'
                text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
                theme='dark'
                withMainAccent={true}
                heroGridClass={'textFirst'}
                mainAccentClass={'smallerAccent'}
            />


            <div className='switch-wrapper'>
                <span className={`${isMonthly ? 'active' : ''} periodicity`}>Monthly</span>
                <Switch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
                <span className={`${!isMonthly ? 'active' : ''} periodicity`}>Yearly</span>

            </div>

            <PriceContainer isMonthly={isMonthly} />
            <FeaturesComparison />
            <CTAReminder />
            <Footer />

        </>
    )
}