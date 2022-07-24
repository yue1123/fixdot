import chalk from 'chalk'
import {_FixDotResult} from './handler'

export default function printSnippets(snippets: string[][]) {
	for (const [before, after] of snippets) {
		console.log(
			`${chalk.green('✓')} ${chalk.dim('Original snippet: ')} ${chalk.red(before)}  ${chalk.dim(
				'→'
			)}  ${chalk.green(after)}`
		)
	}
	console.log()
}
