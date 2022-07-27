import { Command } from 'commander'
import { version } from '../package.json'
import run from './walk'
import processParams from './processParams'
import beforeRun from './beforeRun'

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
		console.log('params', params)
		if (!params.length) {
			console.error('error: missed file path argument')
			return
		}
		params = [...new Set(params)]
		beforeRun(params)
			.then((res) => {
				console.log('glob res', res)
				run(processParams(res), options)
			})
			.catch((err) => {
				console.log(err)
			})
		// run(processParams(params), options)
	})

program.parse()
