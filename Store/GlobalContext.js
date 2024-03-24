import React, { createContext, useState, useEffect, useRef } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState();

    const [isMobileResolution, setIsMobileResolution] = useState();
    const [isTabletResolution, setIsTabletResolution] = useState();
    const [isDesktopResolution, setIsDesktopResolution] = useState();

    const [showPopupConfirmation, setShowPopupConfirmation] = useState();
    const [showPopupError, setShowPopupError] = useState();
    const [showPopupContactFormIncorrect, setShowPopupContactFormIncorrect] = useState();

    const [isMonthly, setIsMonthly] = useState(true);
    const [animatePrice, setAnimatePrice] = useState(false);
    const [cart, setCart] = useState([]);

    const [mobileResolution] = useState(320);
    const [tabletResolution] = useState(768);
    const [desktopResolution] = useState(1440);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const confirmationDialog = React.useRef();
    const [totalPrice, setTotalPrice] = useState(0);
    const [grandTotalPrice, setGrandTotalPrice] = useState(0);

    const toggleCart = () => {
        fetch('/api/getCartInCookies').then(response => response.json()).then(data => {
            console.log("Global context data : " + data);
            if (data.length > 0) {
                setCart(data);
            }
        });
        setIsCartOpen(!isCartOpen);
        handleBodyScroll(!isCartOpen);
        setIsMenuOpen(false);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // handleBodyScroll(!isMenuOpen);
        setIsCartOpen(false);
    }

    const handleBodyScroll = (lockScroll) => {
        const body = document.body;
        if (lockScroll) {
            console.log("lock scroll")
            body.style.overflow = 'hidden!important';
        } else {
            body.style.overflow = 'auto';
        }
    };

    return (
        <GlobalContext.Provider value={{
            isLoading, setIsLoading,
            isMobileResolution, setIsMobileResolution,
            isTabletResolution, setIsTabletResolution,
            isDesktopResolution, setIsDesktopResolution,
            showPopupConfirmation, setShowPopupConfirmation,
            showPopupError, setShowPopupError,
            isMenuOpen, setIsMenuOpen,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect,
            mobileResolution, tabletResolution, desktopResolution,
            toggleMenu,
            isMonthly, setIsMonthly,
            animatePrice, setAnimatePrice,
            cart, setCart,
            isCartOpen, setIsCartOpen,
            toggleCart,
            confirmationDialog,
            grandTotalPrice, setGrandTotalPrice,
            totalPrice, setTotalPrice


        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;