import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Head from "next/head";
import { CategoryById, ProductsByType, callShopify } from '@/helpers/shopify';
import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';
import ValueProposition from '@/Components/ValueProposition';
import CategoryCardContainer from '@/Components/CategoryCardContainer';
import ProductCard from '@/Components/ProductPreview/ProductCard';
import Banner from '@/Components/Layout/Banner';
import ProductCardContainer from '@/Components/ProductPreview/ProductCardContainer';
import Cart from '@/Components/Cart';

export default function Category({ products, productType }) {


    /* Logger */
    const logger = getLogger('Category');
    logger.debug('Category page rendered');
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
                <title>Category</title>
                <meta name="description" content="Audiophile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} /> */}
            <Navbar />
            {isCartOpen && <div id='popup-overlay' onClick={toggleCart} />}
            {products && products.length > 0 && < Banner title={productType} />}
            <ProductCardContainer>

                {products && products.map((product) => {
                    console.log(product)
                    return (
                        <ProductCard
                            key={product.node.handle}
                            productTag={product.node.tags}
                            productName={product.node.title}
                            productType={product.node.productType}
                            description={product.node.description}
                            productId={product.node.handle}
                            previewImages={product.node.previewImages.references.nodes}
                        />
                    )
                })}
                {products && products.length === 0 && <p>Aucun produit n&apos; été trouvé pour cette catégorie</p>}


            </ProductCardContainer >
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
    const logger = getLogger('Category page - Server side');
    // Call shopify API to retrieve category with categoryId
    const data = await callShopify(ProductsByType, { productTypeQuery: 'product_type:' + context.params.productType });
    const products = data?.data?.products?.edges;
    const productType = Array.isArray(products) ? products[0].node.productType : '';

    return {
        props: {
            products: products || [],
            productType: productType
        },
    }
}
