import chalk from 'chalk'
import { _FixDotResult } from './run'

export default function printSnippets(snippets: string[][]) {
	for (const [before, after] of snippets) {
		console.log(
			`${chalk.green('✓')} ${chalk.gray('original snippet: ')} ${chalk.red(
				before
			)}  ${chalk.dim('→')}  ${chalk.green(after)}`
		)
	}
	console.log()
}
