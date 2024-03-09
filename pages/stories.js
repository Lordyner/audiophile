import { getLogger } from "@/Logging/log-util";
import GlobalContext from "@/Store/GlobalContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import moonImageMobile from '@/public/images/stories/mobile/moon-of-appalacia.jpg';


import mountainsMobile from '@/public/images/stories/mobile/mountains.jpg';
import mountainsTablet from '@/public/images/stories/tablet/mountains.jpg';
import mountainsDesktop from '@/public/images/stories/desktop/mountains.jpg';

import cityMobile from '@/public/images/stories/mobile/cityscapes.jpg';
import cityTablet from '@/public/images/stories/tablet/cityscapes.jpg';
import cityDesktop from '@/public/images/stories/desktop/cityscapes.jpg';

import voyageMobile from '@/public/images/stories/mobile/18-days-voyage.jpg';
import voyageTablet from '@/public/images/stories/tablet/18-days-voyage.jpg';
import voyageDesktop from '@/public/images/stories/desktop/18-days-voyage.jpg';

import architecturalsMobile from '@/public/images/stories/mobile/architecturals.jpg';
import architecturalsTablet from '@/public/images/stories/tablet/architecturals.jpg';
import architecturalsDesktop from '@/public/images/stories/desktop/architecturals.jpg';

import worldTourMobile from '@/public/images/stories/mobile/world-tour.jpg';
import worldTourTablet from '@/public/images/stories/tablet/world-tour.jpg';
import worldTourDesktop from '@/public/images/stories/desktop/world-tour.jpg';

import unforseenCornersMobile from '@/public/images/stories/mobile/unforeseen-corners.jpg';
import unforseenCornersTablet from '@/public/images/stories/tablet/unforeseen-corners.jpg';
import unforseenCornersDesktop from '@/public/images/stories/desktop/unforeseen-corners.jpg';

import kingOnAfricaMobile from '@/public/images/stories/mobile/king-on-africa.jpg';
import kingOnAfricaTablet from '@/public/images/stories/tablet/king-on-africa.jpg';
import kingOnAfricaDesktop from '@/public/images/stories/desktop/king-on-africa.jpg';

import tripToNowhereMobile from '@/public/images/stories/mobile/trip-to-nowhere.jpg';
import tripToNowhereTablet from '@/public/images/stories/tablet/trip-to-nowhere.jpg';
import tripToNowhereDesktop from '@/public/images/stories/desktop/trip-to-nowhere.jpg';

import rageOfSeaMobile from '@/public/images/stories/mobile/rage-of-the-sea.jpg';
import rageOfSeaTablet from '@/public/images/stories/tablet/rage-of-the-sea.jpg';
import rageOfSeaDesktop from '@/public/images/stories/desktop/rage-of-the-sea.jpg';

import runningFreeMobile from '@/public/images/stories/mobile/running-free.jpg';
import runningFreeTablet from '@/public/images/stories/tablet/running-free.jpg';
import runningFreeDesktop from '@/public/images/stories/desktop/running-free.jpg';

import behindTheWavesMobile from '@/public/images/stories/mobile/behind-the-waves.jpg';
import behindTheWavesTablet from '@/public/images/stories/desktop/behind-the-waves.jpg';
import behindTheWavesDesktop from '@/public/images/stories/desktop/behind-the-waves.jpg';

import calmWatersMobile from '@/public/images/stories/mobile/calm-waters.jpg';
import calmWatersTablet from '@/public/images/stories/desktop/calm-waters.jpg';
import calmWatersDesktop from '@/public/images/stories/desktop/calm-waters.jpg';

import milkyWayMobile from '@/public/images/stories/mobile/milky-way.jpg';
import milkyWayTablet from '@/public/images/stories/tablet/milky-way.jpg';
import milkyWayDesktop from '@/public/images/stories/desktop/milky-way.jpg';

import darkForestMobile from '@/public/images/stories/mobile/dark-forest.jpg';
import darkForestTablet from '@/public/images/stories/tablet/dark-forest.jpg';
import darkForestDesktop from '@/public/images/stories/desktop/dark-forest.jpg';

import somwarpetMobile from '@/public/images/stories/mobile/somwarpet.jpg';
import somwarpetTablet from '@/public/images/stories/tablet/somwarpet.jpg';
import somwarpetDesktop from '@/public/images/stories/desktop/somwarpet.jpg';

import landOfDreamsMobile from '@/public/images/stories/mobile/land-of-dreams.jpg';
import landOfDreamsTablet from '@/public/images/stories/tablet/land-of-dreams.jpg';
import landOfDreamsDesktop from '@/public/images/stories/desktop/land-of-dreams.jpg';



import Navbar from "@/Components/Navbar";
import ImageCardContainer from "@/Components/ImageCardContainer";
import Footer from "@/Components/Footer";


export default function Stories() {
    /* Logger */
    const logger = getLogger('Stories');
    logger.debug('Stories page rendered');

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

    const cards = [
        {
            image: isMobileResolution ? mountainsMobile : isTabletResolution ? mountainsTablet : mountainsDesktop,
            alt: 'mountains',
            title: 'The Mountains',
            author: 'John Appleseed',
            CTA: 'Read story',
            imageClassName: 'mountain',
            date: 'April 16th 2020',
        },
        {
            image: isMobileResolution ? cityMobile : isTabletResolution ? cityTablet : cityDesktop,
            alt: 'city',
            title: 'Sunset Cityscapes',
            author: 'Benjamin Cruz',
            CTA: 'Read story',
            imageClassName: 'cityscapes',
            date: 'April 14th 2020',
        },
        {
            image: isMobileResolution ? voyageMobile : isTabletResolution ? voyageTablet : voyageDesktop,
            alt: 'voyage',
            title: '18 Days Voyage',
            author: 'Alexei Borodin',
            CTA: 'Read story',
            imageClassName: 'voyage',
            date: 'April 11th 2020',
        },
        {
            image: isMobileResolution ? architecturalsMobile : isTabletResolution ? architecturalsTablet : architecturalsDesktop,
            alt: 'architecturals',
            title: 'Architecturals',
            author: 'Samantha Brooke',
            CTA: 'Read story',
            imageClassName: 'architecturals',
            date: 'April 9th 2020',
        },
        {
            image: isMobileResolution ? worldTourMobile : isTabletResolution ? worldTourTablet : worldTourDesktop,
            alt: 'world tour',
            title: 'World Tour 2019',
            author: 'Timothy Wagner',
            CTA: 'Read story',
            date: 'April 7th 2020',
        },
        {
            image: isMobileResolution ? unforseenCornersMobile : isTabletResolution ? unforseenCornersTablet : unforseenCornersDesktop,
            alt: 'unforeseen corners',
            title: 'Unforeseen Corners',
            author: 'William Malcolm',
            CTA: 'Read story',
            date: 'April 3rd 2020',
        },
        {
            image: isMobileResolution ? kingOnAfricaMobile : isTabletResolution ? kingOnAfricaTablet : kingOnAfricaDesktop,
            alt: 'king on africa',
            title: 'King on Africa: Part II',
            author: 'Tim Hillenburg',
            CTA: 'Read story',
            date: 'March 29th 2020',
        },
        {
            image: isMobileResolution ? tripToNowhereMobile : isTabletResolution ? tripToNowhereTablet : tripToNowhereDesktop,
            alt: 'trip to nowhere',
            title: 'The Trip to Nowhere',
            author: 'Felicia Rourke',
            CTA: 'Read story',
            date: 'March 21st 2020',
        },
        {
            image: isMobileResolution ? rageOfSeaMobile : isTabletResolution ? rageOfSeaTablet : rageOfSeaDesktop,
            alt: 'rage of the sea',
            title: 'Rage of The Sea',
            author: 'Mohammed Abdul',
            CTA: 'Read story',
            date: 'March 19th 2020',
        },
        {
            image: isMobileResolution ? runningFreeMobile : isTabletResolution ? runningFreeTablet : runningFreeDesktop,
            alt: 'running free',
            title: 'Running Free',
            author: 'Michelle',
            CTA: 'Read story',
            date: 'March 16th 2020',
        },
        {
            image: isMobileResolution ? behindTheWavesMobile : isTabletResolution ? behindTheWavesTablet : behindTheWavesDesktop,
            alt: 'behind the waves',
            title: 'Behind the Waves',
            author: 'Lamarr Wilson',
            CTA: 'Read story',
            date: 'March 11th 2020',
        },
        {
            image: isMobileResolution ? calmWatersMobile : isTabletResolution ? calmWatersTablet : calmWatersDesktop,
            alt: 'calm waters',
            title: 'Calm Waters',
            author: 'Samantha Brooke',
            CTA: 'Read story',
            date: 'March 9th 2020',
        },
        {
            image: isMobileResolution ? milkyWayMobile : isTabletResolution ? milkyWayTablet : milkyWayDesktop,
            alt: 'milky way',
            title: 'The Milky Way',
            author: 'Benjamin Cruz',
            CTA: 'Read story',
            date: 'March 5th 2020',
        },
        {
            image: isMobileResolution ? darkForestMobile : isTabletResolution ? darkForestTablet : darkForestDesktop,
            alt: 'dark forest',
            title: 'Night at The Dark Forest',
            author: 'Mohammed Abdul',
            CTA: 'Read story',
            date: 'March 4th 2020',
        },
        {
            image: isMobileResolution ? somwarpetMobile : isTabletResolution ? somwarpetTablet : somwarpetDesktop,
            alt: 'somwarpet',
            title: 'Somwarpet\'s Beauty',
            author: 'Michelle',
            CTA: 'Read story',
            date: 'March 1st 2020',
        },
        {
            image: isMobileResolution ? landOfDreamsMobile : isTabletResolution ? landOfDreamsTablet : landOfDreamsDesktop,
            alt: 'land of dreams',
            title: 'Land of Dreams',
            author: 'William Malcolm',
            CTA: 'Read story',
            date: 'February 25th 2020',
        }
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
                <title>Photosnap</title>
                <meta name="description" content="Create and share your photo stories" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
            <Navbar />
            <div className={`heroStories`}>
                <div className={`heroText`}>
                    <p className='preTitle'>Last month&apos;s featured story</p>
                    <h1>Hazy full<br /> moon of appalachia</h1>
                    <div className='heroDateAndAuthor'>
                        <p>March 2nd 2020 </p><p className="author">by Jonh Appleseed</p>
                    </div>
                    <div className='heroTextContent'>
                        <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called &quot;mountains&quot;, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                        <Link href="#" className={`secondary-link dark`}>Read the story</Link>
                    </div>
                </div>
                {isMobileResolution && <Image src={moonImageMobile} alt='moon' className='heroImg' />}
            </div>
            <ImageCardContainer cards={cards}></ImageCardContainer>
            <Footer />

        </>
    )
}