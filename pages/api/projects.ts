import { NextApiRequest, NextApiResponse } from 'next'
import projects from 'store/projects'
import { validateApiMethod } from './en'

export default async function ApiOffers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	validateApiMethod(req, res, 'GET')
	return res.json(projects)
}
