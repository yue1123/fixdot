import chalk from 'chalk'
import {_FixDotResult} from './handler'
import { padTitle } from './utils'
export default function printSnippets(snippets: string[][]) {
	for (const [before, after] of snippets) {
		console.log(
			`${chalk.green('✓')} ${chalk.dim('Original snippet: ')} ${chalk.red(before)}  ${chalk.dim(
				'== After fix ==>'
			)}  ${chalk.green(after)}`
		)
	}
	console.log()
	// if (showDetail fixData.length) {
	// 	console.log(
	// 		`${padTitle('Total Fixed')} ${chalk.bold.green(fixData.length)} snippets ${chalk.dim(`(${fixData.length})`)}`
	// 	)
	// }
	// console.log(`${padTitle('Time',12)} ${d1 & 0}ms`)
}
