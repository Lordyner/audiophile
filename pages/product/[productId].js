import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Head from "next/head";
import { ProductByHandle, callShopify } from '@/helpers/shopify';
import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';
import ValueProposition from '@/Components/ValueProposition';
import ProductCardDetail from '@/Components/ProductDetail/ProductCardDetail';
import ProductDetailContainer from '@/Components/ProductDetail/ProductDetailContainer';
import ProductInformation from '@/Components/ProductDetail/ProductInformation';
import ProductImages from '@/Components/ProductDetail/ProductImages';
import Breadcrumb from '@/Components/Layout/Breadcrumb';


export default function Product({ product, productImages }) {


    /* Logger */
    const logger = getLogger('Product detail page - Client side');
    logger.debug('Product detail page rendered');
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



    }, [screenWidth])

    // const mainDescription = product.description.toString().split('Features')[0];
    // const additionnalDescription = product.description.toString().split('Features')[1];
    // const inTheBox = additionnalDescription.split('In the box')[1];
    // const features = additionnalDescription.split('In the box')[0];

    return (
        <>
            <Head>
                <title>Product detail</title>
                <meta name="description" content="Audiophile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
            <Navbar />
            <Breadcrumb />
            <ProductDetailContainer>
                {product && <ProductCardDetail product={product} productImages={productImages} />}
                {product && <ProductInformation product={product} />}
                {product && <ProductImages product={product} />}
            </ProductDetailContainer>
            <ValueProposition />
            <Footer />
        </>
    )
}
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}
export async function getStaticProps(context) {
    const logger = getLogger('Product detail page - Server side');
    const { productId } = context.params;
    const data = await callShopify(ProductByHandle, { productHandle: productId });
    const productImages = data.data.product.images.edges.filter((image) => image.node.url.includes('product'));
    logger.debug(' Product fetched from Shopify %s', JSON.stringify(data));
    return {
        props: {
            product: data.data.product,
            productImages: productImages
        },
        revalidate: 60
    }
}
