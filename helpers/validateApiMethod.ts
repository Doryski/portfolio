import { NextApiRequest, NextApiResponse } from 'next'

export default function validateApiMethod(
	req: NextApiRequest,
	res: NextApiResponse,
	method:
		| 'GET'
		| 'POST'
		| 'PUT'
		| 'DELETE'
		| Array<'GET' | 'PUT' | 'POST' | 'DELETE'>
) {
	if (typeof method === 'string' && req.method !== method)
		return res.json(`Only ${method} method is available.`)
	if (method instanceof Array) {
		const methods = method.reduce((acc, val, index, array) => {
			if (index === array.length - 1) return (acc += val)
			return (acc += `${val}, `)
		}, '')
		return res.json(`Only ${methods} methods are available.`)
	}
	return
}
