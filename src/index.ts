const reg: RegExp = new RegExp(
	`([^\\x00-\\xff]([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff][\\-\\w\\s]+([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff]{1,4}\\s*[\\,\\.\\;\\:]\\s*$)`,
	'gi'
)

const map: Record<string, string> = {
	';': '；',
	'.': '。',
	',': '，',
	'\\': '、'
}


export default function fixDot(rawString: string): string | void {
	const fixData: string[] = []
	try {
		const res = rawString.replace(reg, function (a, b, c, d, e, f) {
			console.log('reg', a, b, c, d, e, f)
			const res = a.replace(c, map[c])
			fixData.push(`原文片段: ${a} == 修正后 ==> : ${res}`)
			return res
		})

    


		if (fixData.length) {
			console.log(`共修复${fixData.length}不正确的标点`)
			for (const item of fixData) {
				console.log(item)
			}
		} else {
			console.log('没有不正确的标点')
		}
		return res
	} catch (error) {
		console.error(error)
	}
}
