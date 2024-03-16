import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Head from "next/head";
import { CategoryById, ProductsByType, callShopify } from '@/helpers/shopify';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import ValueProposition from '@/Components/ValueProposition';
import CategoryCardContainer from '@/Components/CategoryCardContainer';
import ProductCard from '@/Components/ProductCard';
import Banner from '@/Components/Banner';
import ProductCardContainer from '@/Components/ProductCardContainer';

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
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
            <Navbar />
            <Banner title={productType} />
            <ProductCardContainer>

                {products && products.map((product) => {

                    return (
                        <ProductCard key={product.node.id} image={product.node.images.edges} alt={product.node.title} productTag={product.node.tags} productName={product.node.title} productType={product.node.productType} description={product.node.description} productId={product.node.id} />
                    )
                })}

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
    // const category = await callShopify(ProductsByType, { productType: context.params.categoryId });
    const data = await callShopify(ProductsByType, { productTypeQuery: 'product_type:' + context.params.categoryId });
    const products = data.data.products.edges;
    const productType = products[0].node.productType;

    // Remove images from products, if image doesn't contain "image-category-page-preview" in its url
    products.forEach((product) => {
        product.node.images.edges = product.node.images.edges.filter((image) => image.node.url.includes('image-category-page-preview'));
    });

    return {
        props: {
            products: products,
            productType: productType
        },
    }
}
