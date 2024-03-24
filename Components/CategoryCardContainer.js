import React from 'react';
import classes from './CategoryCardContainer.module.css';
import CategoryCard from './CategoryCard';
import thumbnailHeadphones from '../public/images/shared/desktop/image-category-thumbnail-headphones.png';
import thumbnailSpeakers from '../public/images/shared/desktop/image-category-thumbnail-speakers.png';
import thumbnailEarphones from '../public/images/shared/desktop/image-category-thumbnail-earphones.png';
const CategoryCardContainer = ({ onClickCategory }) => {
    return (
        <section className={`${classes.categoryContainer} max-width`}>
            <div className={classes.wrapper}>
                <CategoryCard name='Headphones' image={thumbnailHeadphones} alt='Headphones' onClickCategory={onClickCategory} />
                <CategoryCard name='Speakers' image={thumbnailSpeakers} alt='Speakers' onClickCategory={onClickCategory} />
                <CategoryCard name='Earphones' image={thumbnailEarphones} alt='Earphones' onClickCategory={onClickCategory} />
            </div>
        </section>
    );
};

export default CategoryCardContainer;