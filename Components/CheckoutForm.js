import React, { useRef, useState } from 'react';
import classes from './CheckoutForm.module.css';
import OrderSummary from './OrderSummary';
import iconCashOnDelivery from '../public/images/checkout/icon-cash-on-delivery.svg';
import Image from 'next/image';
const CheckoutForm = () => {

    const [paymentOptionSelected, setPaymentOptionSelected] = useState('eMoney');

    const onPaymentOptionChange = (e) => {

        setPaymentOptionSelected(e.target.value);
    }

    const form = useRef();
    const payOrder = () => {
        // Fields validation
        if (form.current.checkValidity()) {
            console.log('Form is valid');
        } else {
            console.log('Form is invalid');
        }
    }
    return (
        <div className={classes.container}>
            <div className={`${classes.wrapper} max-width`}>
                <form ref={form} className={classes.checkoutForm} onSubmit={payOrder}>
                    <div className={classes.formWrapper}>
                        <h1>Checkout</h1>
                        <div className={classes.category}>
                            <h2>Billing details</h2>
                            <div className={`${classes.formFields} ${classes.billingDetails}`}>
                                <div className={classes.formGroup}>
                                    <label className={classes.labelField} htmlFor="name">Name</label>
                                    <span className={classes.inputName}>Name</span>
                                    <input type="text" id="name" name="name" placeholder="Alexei Ward" required />
                                </div>
                                <div className={classes.formGroup}>
                                    <label className={classes.labelField} htmlFor="mail">Email address</label>
                                    <span className={classes.inputName}>Email Adress</span>
                                    <input type="text" id="mail" name="mail" placeholder="alexei@mail.com" required />
                                </div>
                                <div className={classes.formGroup}>
                                    <label className={classes.labelField} htmlFor="phone">Phone number</label>
                                    <span className={classes.inputName}>Phone</span>
                                    <input type="text" id="phone" name="phone" placeholder="+1 202-555-0136" required />
                                </div>
                            </div>
                        </div>
                        <div className={classes.category}>
                            <h2>Shipping info</h2>
                            <div className={`${classes.formFields} ${classes.shippingInfo}`}>
                                <div className={`${classes.formGroup} ${classes.address}`}>
                                    <label className={classes.labelField} htmlFor="address">Your address</label>
                                    <span className={classes.inputName}>Your address</span>
                                    <input type="text" id="address" name="address" placeholder="1137 Williams Avenue" required />
                                </div>
                                <div className={`${classes.formGroup} ${classes.zip}`}>
                                    <label className={classes.labelField} htmlFor="zipCode">ZIP Code</label>
                                    <span className={classes.inputName}>ZIP Code</span>
                                    <input type="text" id="zipCode" name="zipCode" placeholder="10001" required />
                                </div>
                                <div className={`${classes.formGroup} ${classes.city}`}>
                                    <label className={classes.labelField} htmlFor="city">City</label>
                                    <span className={classes.inputName}>City</span>
                                    <input type="text" id="city" name="city" placeholder="New York" required />
                                </div>
                                <div className={`${classes.formGroup} ${classes.country}`}>
                                    <label className={classes.labelField} htmlFor="country">Country</label>
                                    <span className={classes.inputName}>Country</span>
                                    <input type="text" id="country" name="country" placeholder="United States" required />
                                </div>
                            </div>
                        </div>
                        <div className={classes.category}>
                            <h2>Payment details</h2>
                            <div className={`${classes.formFields} ${classes.paymentDetails}`}>
                                <div className={`${classes.formGroupRB} ${classes.formGroup} ${classes.paymentMethod}`}>

                                    <span className={`${classes.customRBName}`}>Payment method</span>
                                    <label className={`${classes.customRB} ${classes.eMoney}`}>
                                        <input type="radio" name="paymentMethod"
                                            id='eMoney' value="eMoney"
                                            checked={paymentOptionSelected === "eMoney"}
                                            onChange={onPaymentOptionChange}
                                        />
                                        <span className={classes.checkmark}></span>
                                        <span className={classes.rbText}>e-Money</span>
                                    </label>

                                    <label className={`${classes.customRB} ${classes.cashOnDelivery}`}>
                                        <input type="radio" name="paymentMethod"
                                            id='cashOnDelivery' value="cashOnDelivery"
                                            checked={paymentOptionSelected === "cashOnDelivery"}
                                            onChange={onPaymentOptionChange}
                                        />
                                        <span className={classes.checkmark}></span>
                                        <span className={classes.rbText}>Cash On Delivery</span>
                                    </label>
                                </div>
                                {paymentOptionSelected === 'eMoney' &&
                                    <div className={classes.paymentInfo}>

                                        <div className={`${classes.formGroup} ${classes.eMoneyNumber}`}>
                                            <label className={classes.labelField} htmlFor="eMoneyNumber">e-Money Number</label>
                                            <span className={classes.inputName}>e-Money Number</span>
                                            <input type="text" id="eMoneyNumber" name="eMoneyNumber" placeholder="238521993" required />
                                        </div>
                                        <div className={`${classes.formGroup} ${classes.eMoneyPin}`}>
                                            <label className={classes.labelField} htmlFor="eMoneyPIN">e-Money PIN</label>
                                            <span className={classes.inputName}>e-Money PIN</span>
                                            <input type="text" id="eMoneyPIN" name="eMoneyPIN" placeholder="6891" required />
                                        </div>
                                    </div>
                                }
                                {paymentOptionSelected === 'cashOnDelivery' &&
                                    <div className={classes.cashOnDeliveryInfo}>
                                        <Image src={iconCashOnDelivery} alt="Cash on Delivery" />
                                        <p className={classes.explication}>The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <OrderSummary />
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;