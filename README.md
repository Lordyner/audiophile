# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./audiophile.png)

### Links

- Solution URL: [https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx/hub](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx/hub)
- Live Site URL: [https://audiophile-indol-nu.vercel.app/](https://audiophile-indol-nu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Shopify] (https://www.shopify.com/fr)

### What I learned

- How to use Shopify Graph QL API
- How to request Graph QL API
- How to create a store on Shopify and create meta fields

### Continued development

I have some improvements in mind for this project : 
- Refactor my project and have a clean architecture
- Call Shopify API to handle cart (for the moment I handle cart on my own)

In general those are the two aspects I want to keep working on : architecture and building e-commerce app with Shopify


### Useful resources

- [Metafield documentation](https://shopify.dev/docs/api/storefront/2024-01/objects/Metafield)


## Author

- Website - [Thomas André-Lubin](https://www.thomasandrelubin.fr/)
- Frontend Mentor - [@Lordyner](https://www.frontendmentor.io/profile/Lordyner)

## Acknowledgments

Thanks to Morgan (aka Momo) for being my plastic duck and helping me figure out how to request my metafields

