import { NextApiRequest, NextApiResponse } from 'next'

type Methods = Array<'GET' | 'PUT' | 'POST' | 'DELETE'>

export const statement = (x: string, y: 'is' | 'are') =>
	`Only ${x} method${y === 'are' && 's'} ${y} available`

export const reduceMethods = (methods: Methods) =>
	methods.reduce((acc, val, index, array) => {
		if (index === array.length - 1) return (acc += val)
		return (acc += `${val}, `)
	}, '')

export default function validateApiMethod(
	req: NextApiRequest,
	res: NextApiResponse,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | Methods
) {
	if (typeof method === 'string' && req.method !== method)
		return res.json(statement(method, 'is'))
	if (method instanceof Array) {
		const methods = reduceMethods(method)
		return res.json(statement(methods, 'are'))
	}
	return
}
