import { getLogger } from '@/Logging/log-util';

export default async function getCartFromCookies(req, res) {
    const logger = getLogger('getCartFromCookies');
    logger.debug('Getting cart from cookies');
    const { cart } = req.cookies;
    logger.info('Cart retrieved from cookies : ' + cart)
    res.status(200).json(cart === undefined ? [] : JSON.parse(cart));

}