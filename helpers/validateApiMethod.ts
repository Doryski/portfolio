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
	const statement = (x: string, y: 'is' | 'are') =>
		`Only ${x} method${y === 'are' && 's'} ${y} available`

	if (typeof method === 'string' && req.method !== method)
		return res.json(statement(method, 'is'))
	if (method instanceof Array) {
		const methods = method.reduce((acc, val, index, array) => {
			if (index === array.length - 1) return (acc += val)
			return (acc += `${val}, `)
		}, '')
		return res.json(statement(methods, 'are'))
	}
	return
}
