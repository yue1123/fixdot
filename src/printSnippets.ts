import chalk from 'chalk'
import { _FixDotResult } from './walk'
import { logger } from './utils'

export default function printSnippets(snippets: string[][]) {
	for (const [before, after] of snippets) {
		logger(
			`${chalk.green('✓')} ${chalk.gray('original snippet: ')} ${chalk.red(
				before
			)}  ${chalk.dim('→')}  ${chalk.green(after)}`
		)
	}
	logger()
}
