import { isMagicPath, getMatchPatternFiles } from './utils'

export default async function beforeRun(params: string[], options: Record<string, boolean>) {
	if (!params.length) {
		console.error('error: missed file path argument')
		return
	}
	const paramsQueue = [...new Set(params)].map((paramsItem) => {
		console.log(paramsItem)
		if (isMagicPath(paramsItem)) {
			return getMatchPatternFiles(paramsItem)
		}
		return Promise.resolve([paramsItem])
	})
	const res = (await Promise.allSettled(paramsQueue)).reduce((pre: string[], cur) => {
		if (cur.status === 'fulfilled') {
			Array.prototype.push.apply(pre, cur.value)
		}
		// console.log(pre)
		return pre
	}, [])
	console.log(res, '====')
	return
}
