import React from 'react';
import classes from './Features.module.css';
import Feature from './Feature';
const FeaturesComponent = ({ features, page }) => {
    return (
        <section className={`${classes.features} max-width ${page === 'feature' ? classes.doubleColumnTablet : ''}`}>
            {features.map((feature, index) => {
                return (
                    <Feature key={index} image={feature.image} alt={feature.alt} title={feature.title} description={feature.description} />
                )
            })}
        </section>
    );
};

export default FeaturesComponent;