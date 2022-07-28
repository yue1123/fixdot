import { Command } from 'commander'
import { version } from '../package.json'
import run from './walk'
import processParams from './processParams'
import beforeRun from './beforeRun'
import chalk from 'chalk'
import { logger } from './utils'

const program = new Command()
program
	.name('fixDot')
	.description('Fix english punctuation to chinese punctuation for in Chinese sentences')
	.version(version, '-v, --version', 'output the current version')

program
	.arguments('[file_path...]')
	.option('-p --preview', 'only preview incorrect snippets, will not write to the file')
	.option('-d --detail', 'show incorrect snippets')
	.action((params, options) => {
		if (!params.length) {
			console.error('error: missed file path argument')
			return
		}
		beforeRun(params)
			.then((res) => {
				return processParams(res)
			})
			.then((res) => {
				res.length && run(res, options)
			})
			.catch((err) => {
				logger(chalk.red(err.message || err))
			})
	})

program.parse()
