import React, { useContext } from 'react';
import classes from './FeaturesComparison.module.css';
import GlobalContext from '@/Store/GlobalContext';
import FeatureComparison from './FeatureComparison';

const FeaturesComparison = () => {

    const { isMobileResolution } = useContext(GlobalContext);


    const features = [
        {
            title: 'Unlimited Story Posting',
            basic: true,
            pro: true,
            business: true
        },
        {
            title: 'Unlimited Photo Upload',
            basic: true,
            pro: true,
            business: true
        },
        {
            title: 'Embedding Custom Content',
            basic: false,
            pro: true,
            business: true
        },
        {
            title: 'Customize Metadata',
            basic: false,
            pro: false,
            business: true
        },
        {
            title: 'Advanced Metrics',
            basic: false,
            pro: false,
            business: true
        },
        {
            title: 'Photo Downloads',
            basic: false,
            pro: false,
            business: true
        },
        {
            title: 'Search Engine Indexing',
            basic: false,
            pro: false,
            business: true
        },
        {
            title: 'Custom Analytics',
            basic: false,
            pro: false,
            business: true
        }

    ]

    return (
        <section className={`${classes.comparison} ${classes.maxWidth}`}>
            {!isMobileResolution && <h2>Compare</h2>}
            <div className={classes.header}>
                <h3>The features</h3>
                {!isMobileResolution &&
                    <div className={classes.offersLabel}>
                        <h4>Basic</h4>
                        <h4>Pro</h4>
                        <h4>Business</h4>
                    </div>
                }
            </div>
            {features.map((feature, index) => {
                return (
                    <FeatureComparison key={index} title={feature.title} isBasic={feature.basic} isPro={feature.pro} isBusiness={feature.business} />
                )
            })}
        </section>
    );
};

export default FeaturesComparison;
