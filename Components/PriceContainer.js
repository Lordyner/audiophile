import React from 'react';
import classes from './PriceContainer.module.css';
import PriceCard from './PriceCard';

const PriceContainer = ({ isMonthly }) => {
    return (
        <section className={`${classes.priceSection} max-width`}>
            <PriceCard
                title='Basic'
                description='Includes basic usage of our platform. Recommended for new and aspiring photographers.'
                price={isMonthly ? '19.00' : '190.00'}
                isMonthly={isMonthly}

            />
            <PriceCard
                title='Pro'
                description='More advanced features available. Recommended for photography veterans and professionals.'
                price={isMonthly ? '39.00' : '390.00'}
                mostPopular={true}
                isMonthly={isMonthly}
            />
            <PriceCard
                title='Business'
                description='Additional features available such as more detailed metrics. Recommended for business owners.'
                price={isMonthly ? '99.00' : '990.00'}
                isMonthly={isMonthly}
            />
        </section>
    );
};

export default PriceContainer;