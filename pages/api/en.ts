import validateApiMethod from '@/helpers/validateApiMethod'
import { NextApiRequest, NextApiResponse } from 'next'
import translationEN from '../../translations/en'

export default async function ApiOffers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	validateApiMethod(req, res, 'GET')
	return res.json({ language: 'EN', content: translationEN })
}
