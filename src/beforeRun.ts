import { isMagicPath, getMatchPatternFiles } from './utils'

export default async function beforeRun(params: string[]) {
	const paramsQueue = [...new Set(params)].map((paramsItem) => {
		if (isMagicPath(paramsItem)) {
			return getMatchPatternFiles(paramsItem)
		}
		return Promise.resolve([paramsItem])
	})
	const res = (await Promise.allSettled(paramsQueue)).reduce((pre: string[], cur) => {
		if (cur.status === 'fulfilled') {
			Array.prototype.push.apply(pre, cur.value)
		}
		return pre
	}, [])
	return res
}
