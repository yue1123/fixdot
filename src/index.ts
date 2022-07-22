import chalk from 'chalk'

const reg: RegExp = new RegExp(
	`([^\\x00-\\xff]([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff][\\-\\w\\s]+([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff]{1,4}\\s*[\\,\\.\\;\\:]\\s*$)`,
	'gi'
)

const replaceReg: RegExp = /([\,\.\;\:])/g
const map: Record<string, string> = {
	';': '；',
	'.': '。',
	',': '，',
	':': '：',
	'\\': '、'
}

export default function fixDot(rawString: string): string | void {
	const fixData: string[] = []
	const d1 = Date.now()
	try {
		const res: any = rawString.replace(reg, (targetStr: string) => {
			const res = targetStr.replace(replaceReg, (_: string, b: string) => {
				return map[b]
			})
			fixData.push(
				`original snippet: ${chalk.red(targetStr)}  == after fix ==>  ${chalk.green(res)}`
			)
			return res
		})
		for (const item of fixData) {
			console.log(item)
		}
		if (fixData.length) {
			console.log(
				chalk.bold('Result:'),
				`total fix ${fixData.length} place that not correct dot`
			)
		} else {
			// console.log('没有不正确的标点')
		}
		console.log(chalk.bold('Time:'), Date.now() - d1, 'ms')
		return res
	} catch (error) {
		console.error(error)
	}
}
