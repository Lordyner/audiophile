import { getLogger } from '@/Logging/log-util';

export default async function addCartInCookies(req, res) {
    const logger = getLogger('addCartInCookies');
    logger.info('Add cart in cookies');

    logger.debug('Request body: ' + JSON.stringify(req.body));
    const { cart } = req.body;
    logger.debug('Cart: totot ' + cart);
    res.setHeader('Set-Cookie', `cart=${JSON.stringify(req.body)}`);
    res.status(200).json({ message: 'Cart updated' });
}

