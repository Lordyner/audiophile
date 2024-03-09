import React, { useContext } from 'react';
import classes from './Switch.module.css';

const Switch = ({ isMonthly, setIsMonthly }) => {

    return (
        <label className={classes.switch}>
            <input type='checkbox' onClick={() => {
                setIsMonthly(!isMonthly);
            }}
            />
            <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
    );
};

export default Switch;