import validateApiMethod from '@/helpers/validateApiMethod'
import { NextApiRequest, NextApiResponse } from 'next'
import projects from 'store/projects'

export default async function getProjects(
	req: NextApiRequest,
	res: NextApiResponse
) {
	validateApiMethod(req, res, 'GET')
	return res.json(projects)
}
