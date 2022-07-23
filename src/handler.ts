import fixDot, { FixDotResult } from './fixDot'
import { read, write, padTitle } from './utils'
import chalk from 'chalk'
import printSnippets from './printSnippets'
import prompts from 'prompts'

export interface _FixDotResult extends FixDotResult {
	file: string
}

export default async function handler(params: string[], options: Record<string, boolean>) {
	if (!params.length) {
		console.error('error: missed file path argument')
		return
	}
	params = [...new Set(params)]
	const queue: Promise<_FixDotResult>[] = params.map((path: string) => {
		return new Promise((resolve, reject) => {
			read(path)
				.then((data: string) => {
					return fixDot(data)
				})
				.then((data) => {
					resolve({
						file: path,
						...data
					})
				})
				.catch((err: any) => {
					// switch (err.code) {
					// 	case 'FIXED_ERROR':
					// 		break
					// 	case 'ENOENT':
					// 		break
					// 	default:
					// 		break
					// }
					reject({
						file: path,
						err
					})
					// console.error(err)
				})
		})
	})
	Promise.allSettled(queue).then((res) => {
		let totalTime = 0
		let totalSnippets = 0
    const action = options.preview ? 'Found' : 'Fixed'
		res.forEach(async (resItem) => {
			if (resItem.status === 'fulfilled') {
				const { snippets, time, file, res } = resItem.value
				totalTime += time
				totalSnippets += snippets.length
				if (res.length !== 1 && snippets.length) {
					console.log(chalk.cyan(`${action} ${file} ${snippets.length} snippets in ${time}ms`))
					options.detail && printSnippets(snippets)
          if (options.preview) {
						const response = await prompts({
							type: 'confirm',
							name: 'value',
							message: 'Would you like write to the result into file?',
							initial: true
						})
						console.log(response) // => { value: 24 }
					} else {
						await write(file, res)
					}
				}
			} else {
				console.log(chalk.red(resItem.reason.err.message))
				console.log()
			}
		})
		if (totalSnippets) {
			console.log(
				`${padTitle(`Total ${action}`, 12)} ${chalk.bold.green(totalSnippets)} snippets ${chalk.dim(`(${totalSnippets})`)}`
			)
			console.log(`${padTitle('Time', 12)} ${totalTime}ms`)
		} else {
			console.log('Yeah! no incorrect punctuation')
		}
	})
}
