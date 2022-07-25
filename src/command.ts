import { Command } from 'commander'
import { version } from '../package.json'
import run from './run'
import beforeRun from './beforeRun'

const program = new Command()
program
	.name('fixDot')
	.description('Fix english punctuation to chinese punctuation for in Chinese sentences')
	.version(version, '-v, --version', 'output the current version')

program
	.arguments('[letters...]')
	.option('-p --preview', 'only preview incorrect snippets, will not write to the file')
	.option('-d --detail', 'show incorrect snippets')
	.action(beforeRun)
  // run

program.parse()

// TODO: 通配符匹配文件
