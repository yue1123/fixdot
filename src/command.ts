import { Command } from 'commander'
import { version } from '../package.json'
import handler from './handler'

const program = new Command()
program
	.name('fixDot')
	.description('Fix english punctuation to chinese punctuation for in Chinese sentences')
	.version(version, '-v, --version', 'output the current version')

program
	.arguments('[letters...]')
	.option('-p --preview', 'only preview incorrect snippets, will not write to the file')
	.option('-d --detail', 'show incorrect snippets')
	.action(handler)

program.parse()
