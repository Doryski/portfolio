export default async function postMessage(
	url: string,
	data: any,
	successFn: Function,
	failureFn: Function
) {
	if (!url) return failureFn()
	try {
		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		successFn()
	} catch (error) {
		failureFn()
	}
}
