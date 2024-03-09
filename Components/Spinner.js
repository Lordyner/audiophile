import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import classes from './Spinner.module.css';
const Spinner = () => {
    return (
        <div className={classes.overlayLoader}><TailSpin
            height="200"
            width="200"
            color="#000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
        /></div>
    );
};

export default Spinner;