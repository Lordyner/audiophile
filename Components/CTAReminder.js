import React from 'react';
import classes from './CTAReminder.module.css';
import Link from 'next/link';

const CTAReminder = () => {
    return (
        <section className={`${classes.reminderSection}`}>
            <div className={`${classes.wrapper} max-width`}>
                <h2>We&apos;re in beta.<br /> Get your invite <br />today !</h2>
                <Link href="/contact" className='secondary-link dark min-width-max-content'>get an invite</Link>
            </div>
        </section>

    );
};
export default CTAReminder;

