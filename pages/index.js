import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Navbar from '@/Components/Layout/Navbar'


import { callShopify, AllProducts } from "../helpers/shopify"
import Image from 'next/image'
import Hero from '@/Components/Layout/Hero'
import Footer from '@/Components/Layout/Footer'
import CategoryCardContainer from '@/Components/CategoryCardContainer'
import HighlightedProducts from '@/Components/HighlightedProducts'
import ValueProposition from '@/Components/ValueProposition'
import Cart from '@/Components/Cart'


export default function Home() {

  // console.log(products);
  /* Logger */
  const logger = getLogger('Home');
  logger.debug('Home page rendered');

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
  const { setCart } = useContext(GlobalContext);

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


  // const fetchCartInCookies = async () => {
  //   const response = await fetch('/api/getCartInCookies');
  //   const data = await response.json();
  //   return data || [];
  // }

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
        <title>Home - Audiophile</title>
        <meta name="description" content="Create and share your photo stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
      {isCartOpen && <div id='popup-overlay' onClick={toggleCart} />}

      <Navbar />

      <Hero />
      <CategoryCardContainer />
      <HighlightedProducts />
      <ValueProposition />
      <Footer />
    </>
  )
}

// export async function getStaticProps() {
//   const logger = getLogger('Home - getStaticProps');


//   return {
//     props: {
//     },
//   }
// }