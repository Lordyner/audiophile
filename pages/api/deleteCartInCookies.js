import { getLogger } from '@/Logging/log-util';


export default async function deleteCartInCookies(req, res) {
    const logger = getLogger('deleteCartInCookies');
    logger.debug('Deleting cart from cookies');
    res.setHeader('Set-Cookie', `cart=[]`);
    res.status(200).json({ message: 'Cart deleted' });
}