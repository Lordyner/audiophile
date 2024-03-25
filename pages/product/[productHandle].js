import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Head from "next/head";
import { FakeProductsByRecommandations, ProductByHandle, ProductsByRecommandations, callShopify } from '@/helpers/shopify';
import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';
import ValueProposition from '@/Components/ValueProposition';
import ProductCardDetail from '@/Components/ProductDetail/ProductCardDetail';
import ProductDetailContainer from '@/Components/ProductDetail/ProductDetailContainer';
import ProductInformation from '@/Components/ProductDetail/ProductInformation';
import ProductImages from '@/Components/ProductDetail/ProductImages';
import Breadcrumb from '@/Components/Layout/Breadcrumb';
import CategoryCardContainer from '@/Components/CategoryCardContainer';
import RecommendedProductsContainer from '@/Components/ProductDetail/RecommendedProductsContainer';
import RecommendedProduct from '@/Components/ProductDetail/RecommendedProduct';
import Cart from '@/Components/Cart';


export default function Product({ product, recommandedProducts }) {

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
    const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
    const { toggleCart, toggleMenu } = useContext(GlobalContext);

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
                <title>Product detail</title>
                <meta name="description" content="Audiophile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} onClick={toggleMenu} />
            <Navbar />
            {isCartOpen && <div id='popup-overlay' onClick={toggleCart} />}

            <Breadcrumb bgColor='bg-color-white' />
            <ProductDetailContainer>
                {product && <ProductCardDetail product={product} productImages={product.images.edges} />}
                {product && <ProductInformation product={product} />}
                {product && <ProductImages product={product} />}
                {!product && <h1>Product not found</h1>}
            </ProductDetailContainer>
            <RecommendedProductsContainer>
                {recommandedProducts && recommandedProducts.map((product, index) => {
                    return <RecommendedProduct key={index} title={product.node.title} images={product.node.recommendationImages} handle={product.node.handle} />
                })}
            </RecommendedProductsContainer>
            <CategoryCardContainer />
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

    // Get product handle from context
    const { productHandle } = context.params;

    // Fetch product from Shopify
    const dataProduct = await callShopify(ProductByHandle, { productHandle: productHandle });
    logger.debug(' Product fetched from Shopify %s', JSON.stringify(dataProduct));
    const dataRecommandations = await callShopify(FakeProductsByRecommandations);

    // Remove the product in dataRecommandations that has the same handle as the product
    const recommandedProducts = dataRecommandations.data.products.edges.filter(product => product.node.handle !== productHandle).slice(0, 3);

    logger.debug(' Recommandations fetched from Shopify %s', JSON.stringify(recommandedProducts));

    return {
        props: {
            product: dataProduct.data.product,
            recommandedProducts: recommandedProducts
        },
        revalidate: 60
    }
}
