import { test, expect } from 'vitest'
import { getMatchPatternFiles } from '../src/utils'

test('匹配模式', async () => {
	let d1 = Date.now()
	const res = await getMatchPatternFiles('**')
	console.log(res, Date.now() - d1)
})
