import fixDot, { FixDotResult } from './fixDot'
import { read, write, padTitle } from './utils'
import chalk from 'chalk'
import printSnippets from './printSnippets'
import prompts from 'prompts'
import { FileItemWithEncode } from './processParams'

export interface _FixDotResult extends FixDotResult {
	file: string
}

export default async function walk(params: FileItemWithEncode[], options: Record<string, boolean>) {
	const queue: Promise<_FixDotResult>[] = params.map((fileItem) => {
		return new Promise((resolve, reject) => {
			fixDot(fileItem.buffer.toString(fileItem.encode))
				.then((data) => {
					resolve({
						file: path,
						...data
					})
				})
				.catch((err: any) => {
					reject({
						file: path,
						err
					})
				})
		})
	})
	Promise.allSettled(queue).then((res) => {
		let totalTime = 0
		let totalSnippets = 0
		const action = options.preview ? 'found' : 'fixed'
		const writeQueue: (() => Promise<void>)[] = []
		params.forEach((resItem) => {
			// if (resItem.status === 'fulfilled') {
			const { snippets, time, file, res } = resItem.value
			totalTime += time
			totalSnippets += snippets.length
			if (res.length !== 1 && snippets.length) {
				console.log(
					chalk.cyan(`${action} ${file} ${snippets.length} snippets in ${time}ms`)
				)
				options.detail && printSnippets(snippets)
				writeQueue.push(() => write(file, res))
			}
			// } else {
			// 	console.log(chalk.red(resItem.reason.err.message))
			// 	console.log()
			// }
		})
	})
	!(async (preview) => {
		// 没有可修复片段
		if (!totalSnippets) {
			return Promise.reject({ msg: 'Yeah! no incorrect punctuation' })
		}
		if (preview) {
			const response = await prompts({
				type: 'confirm',
				name: 'value',
				message: 'Would you like write to the result into file?',
				initial: false
			})
			if (!response.value) {
				return Promise.reject('REJECT')
			}
		}
		return Promise.allSettled(writeQueue.map((writeFn) => writeFn()))
	})(options.preview)
		.then(() => {
			console.log(
				`${padTitle(`Total Fixed`, 12)} ${chalk.bold.green(
					totalSnippets
				)} snippets ${chalk.dim(`(${totalSnippets})`)}`
			)
			console.log(`${padTitle('Time', 12)} ${totalTime}ms`)
		})
		.catch((reason) => {
			if (reason.msg) console.log(reason.msg)
		})
	// })
}