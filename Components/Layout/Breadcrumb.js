import React from 'react';
import classes from './Breadcrumb.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'
const Breadcrumb = () => {

    const router = useRouter();
    return (
        <div className={`${classes.breadcrumbs} max-width`}>
            <button className={classes.breadcrumb} onClick={() => router.back()}>Go back</button>
        </div>
    );
};

export default Breadcrumb;