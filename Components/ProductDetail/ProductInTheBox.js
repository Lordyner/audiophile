import React from 'react';
import classes from './ProductInTheBox.module.css';
const ProductInTheBox = ({ inTheBox }) => {
    const items = inTheBox.split('\n').filter(item => item !== ' ');
    console.log(items)
    return (
        <div className={classes.inTheBox}>
            <h2>In the box</h2>
            <ul className={classes.items}>
                {items.map((item, index) => {
                    if (item !== '') {
                        return <li key={index} className={classes.item}>
                            <span className={classes.occurence}>{item.substring(0, 2)}</span>
                            <span className={classes.itemName}>{item.substring(2)}</span>
                        </li>
                    }
                })}
            </ul>

        </div>
    );
};

export default ProductInTheBox;