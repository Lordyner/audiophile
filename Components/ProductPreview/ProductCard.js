import Image from 'next/image';
import Link from 'next/link';
import classes from './ProductCard.module.css';
import { useContext } from 'react';
import GlobalContext from '@/Store/GlobalContext';
const ProductCard = ({ image, alt, productTag, productName, productType, description, productId }) => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);
    const descriptionUpdated = description.split('Features')[0];
    console.log(descriptionUpdated)
    return (
        <div className={classes.productCard}>
            <Image src={isMobileResolution ? image[0].node.url : isTabletResolution ? image[1].node.url : image[2].node.url} alt={alt} className={classes.productImage} width={327} height={352} />
            <div className={classes.content}>
                {productTag && <span className={classes.productTag}>{productTag}</span>}
                <h2 className={classes.productTitle}>{productName} <br />{productType}</h2>
                <p className={classes.description}>{descriptionUpdated}</p>
                <Link href={`/product/${productId}`} className='primary-link'>See product</Link>
            </div>
        </div>
    );
};

export default ProductCard;