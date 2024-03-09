import Hero from "@/Components/Hero";
import { getLogger } from "@/Logging/log-util";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import heroMobile from '@/public/images/features/mobile/hero.jpg';
import heroTablet from '@/public/images/features/tablet/hero.jpg';
import heroDesktop from '@/public/images/features/desktop/hero.jpg';
import Navbar from "@/Components/Navbar";

import responsiveLogo from '@/public/images/features/desktop/responsive.svg';
import noLimitLogo from '@/public/images/features/desktop/no-limit.svg';
import embedLogo from '@/public/images/features/desktop/embed.svg';
import customDomainLogo from '@/public/images/features/desktop/custom-domain.svg';
import boostExposureLogo from '@/public/images/features/desktop/boost-exposure.svg';
import dragDropLogo from '@/public/images/features/desktop/drag-drop.svg';

import FeaturesComponent from "@/Components/FeaturesComponent";
import CTAReminder from "@/Components/CTAReminder";
import Footer from "@/Components/Footer";

export default function Features() {
    /* Logger */
    const logger = getLogger('Features');
    logger.debug('Features page rendered');

    /* State */
    const [screenWidth, setScreenWidth] = useState();

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

    const features = [
        {
            image: responsiveLogo,
            alt: 'responsive logo',
            title: '100% Responsive',
            description: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
        },
        {
            image: noLimitLogo,
            alt: 'no limit logo',
            title: 'No Photo Upload Limit',
            description: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
        },
        {
            image: embedLogo,
            alt: 'embed logo',
            title: 'Available to Embed',
            description: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. '
        },
        {
            image: customDomainLogo,
            alt: 'custom domain logo',
            title: 'Custom Domain',
            description: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
        },
        {
            image: boostExposureLogo,
            alt: 'boost exposure logo',
            title: 'Boost Your Exposure',
            description: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.'
        },
        {
            image: dragDropLogo,
            alt: 'drag and drop logo',
            title: 'Drag & Drop Image',
            description: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to make your life difficult.'
        },

    ]

    useEffect(() => {
        // Handle menu display
        handleMenuDisplay();
        window.addEventListener('resize', handleMenuDisplay);

        // Handle loading spinner
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));
        console.log()
    }, [screenWidth])


    return (
        <>
            <Head>
                <title>Features</title>
                <meta name="description" content="Create and share your photo stories" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
            <Navbar />
            <Hero image={isMobileResolution ? heroMobile : isTabletResolution ? heroTablet : heroDesktop}
                alt='man holding a camera in front of a mountain'
                title='Features'
                text='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
                theme='dark'
                withMainAccent={true}
                heroGridClass={'textFirst'}
                mainAccentClass={'smallerAccent'}
            />
            <FeaturesComponent features={features} page='feature' />
            <CTAReminder />
            <Footer />

        </>
    )
}