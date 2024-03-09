import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Hero = ({ image, alt, title, text, CTA, theme, withMainAccent, heroGridClass, mainAccentClass }) => {

    return (
        <div className={`hero ${theme} ${heroGridClass}`}>
            <div className={`${withMainAccent ? 'mainAccent ' + mainAccentClass : ''} heroText grid-text`}>
                <h2>{title}</h2>
                <div className='heroTextContent'>
                    <p>{text}</p>
                    {CTA && <Link href="#" className={`secondary-link ${theme}`}>{CTA}</Link>}
                </div>
            </div>
            <Image src={image} alt={alt} className='heroImg grid-image' />
        </div>
    );
};

export default Hero;