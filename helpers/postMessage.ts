export default async function postMessage(
    url: string,
    data: any,
    successFn: Function,
    failureFn: Function
) {
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
