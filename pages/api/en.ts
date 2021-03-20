import { NextApiRequest, NextApiResponse } from 'next'
import translationEN from '../../translations/en'

export function validateApiMethod(
	req: NextApiRequest,
	res: NextApiResponse,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
) {
	if (req.method !== method)
		return res.json(`Only ${method} method is available`)
}
export default async function ApiOffers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	validateApiMethod(req, res, 'GET')
	return res.json({ language: 'EN', content: translationEN })
}
