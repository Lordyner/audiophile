

import React, { useEffect, useRef } from 'react';
import classes from './ProductFeatures.module.css';
// import DOMPurify from "dompurify";
// import DOMPurify from "isomorphic-dompurify";
const ProductFeatures = ({ features }) => {
    // const sanitizedData = () => ({
    //     __html: DOMPurify.sanitize(features)
    // })
    // const window = new JSDOM("").window;
    // const DOMPurifyServer = DOMPurify(window);
    return (
        <div className={classes.features}>
            <h2>Features</h2>
            {/* <p className={classes.description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(features) }} /> */}
            <p className={classes.description} dangerouslySetInnerHTML={{ __html: features }} />
        </div>
    );
};

export default ProductFeatures;