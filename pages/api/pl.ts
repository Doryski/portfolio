import { NextApiRequest, NextApiResponse } from 'next'
import translationPL from '../../translations/pl'
import { validateApiMethod } from './en'

export default async function ApiOffers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	validateApiMethod(req, res, 'GET')
	return res.json({ language: 'PL', content: translationPL })
}
