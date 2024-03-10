import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Navbar from '@/Components/Navbar'


import { callShopify, AllProducts } from "../helpers/shopify"
import Image from 'next/image'
import Hero from '@/Components/Hero'
import Footer from '@/Components/Footer'
import CategoryCardContainer from '@/Components/CategoryCardContainer'


export default function Home({ products }) {

  console.log(products);
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
    console.log()
  }, [screenWidth])




  return (
    <>
      <Head>
        <title>Home - Photosnap</title>
        <meta name="description" content="Create and share your photo stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
      <Navbar />
      <Hero />
      <CategoryCardContainer />
      {/* <Footer /> */}
    </>
  )
}

export async function getStaticProps() {
  const logger = getLogger('Home - getStaticProps');


  const response = await callShopify(AllProducts);

  logger.debug('response', response);
  const products = response.data.products.edges;

  return {
    props: {
      products
    },
  }
}