import Image from 'next/image';
import Link from 'next/link';
import classes from './ProductCard.module.css';
import { useContext } from 'react';
import GlobalContext from '@/Store/GlobalContext';
const ProductCard = ({ productTag, productName, productType, description, productId, previewImages }) => {

    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);



    return (
        <div className={classes.productCard}>
            <Image src={isMobileResolution ?
                previewImages[0].image.url : isTabletResolution ? previewImages[1].image.url : previewImages[2].image.url}
                alt={previewImages[0].image.altText}
                className={classes.productImage} width={327} height={352}
            />
            <div className={classes.content}>
                {productTag && <span className={classes.productTag}>{productTag}</span>}
                <h2 className={classes.productTitle}>{productName} <br />{productType}</h2>
                <p className={classes.description}>{description}</p>
                <Link href={`/product/${productId}`} className='primary-link'>See product</Link>
            </div>
        </div>
    );
};

export default ProductCard;