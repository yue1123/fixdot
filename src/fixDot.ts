import { dotPlaceReg, replaceReg, dotMap, trimReg,spaceReg } from './constants'

export interface FixDotResult {
	res: string
	time: number
	snippets: string[][]
}

export default async function fixDot(rawString: string): Promise<FixDotResult> {
	const snippets: string[][] = []
	let time: number = Date.now()
	try {
		const res: any = rawString.replace(dotPlaceReg, (targetStr: string) => {
			let res = targetStr
				.replace(replaceReg, (_: string, b: string) => dotMap[b])
				.replace(trimReg, (dotString) => dotString.replace(spaceReg, ''))
			snippets.push([targetStr, res])
			return res
		})
		time -= Date.now()
		return {
			res,
			snippets,
			time: time & 0
		}
	} catch (error) {
		throw {
			res: error,
			code: 'FIXED_ERROR',
		}
	}
}
