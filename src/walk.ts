import fixDot, { FixDotResult } from './fixDot'
import { read, write, padTitle } from './utils'
import chalk from 'chalk'
import printSnippets from './printSnippets'
import prompts from 'prompts'
import { FileItemWithEncode } from './processParams'
import { logger } from './utils'
export interface _FixDotResult extends FixDotResult {
	file: string
	encode: FileItemWithEncode['encode']
}

export default async function walk(params: FileItemWithEncode[], options: Record<string, boolean>) {
	const queue: Promise<_FixDotResult>[] = params.map(({ buffer, encode, file }) => {
		return new Promise((resolve, reject) => {
			fixDot(buffer.toString(encode))
				.then((data) => {
					resolve({
						encode,
						file,
						...data
					})
				})
				.catch((err: any) => {
					reject({
						file,
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
		res.forEach((resItem) => {
			if (resItem.status === 'fulfilled') {
				const { snippets, time, file, res } = resItem.value
				totalTime += time
				totalSnippets += snippets.length
				if (res.length !== 1 && snippets.length) {
					logger(chalk.cyan(`${action} ${file} ${snippets.length} snippets in ${time}ms`))
					options.detail && printSnippets(snippets)
					writeQueue.push(() => write(file, res))
				}
			} else {
				logger(chalk.red(resItem.reason.err.message))
				logger()
			}
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
				logger(
					`${padTitle(`Total Fixed`, 12)} ${chalk.bold.green(totalSnippets)} snippets ${chalk.dim(
						`(${totalSnippets})`
					)}`
				)
				logger(`${padTitle('Time', 12)} ${totalTime}ms`)
			})
			.catch((reason) => {
				if (reason.msg) logger(reason.msg)
			})
	})
}
