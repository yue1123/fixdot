import { test, expect } from 'vitest'

import { trimReg } from '../src/constants'
test('多出的空格', async () => {
	const testStr = `'熟练掌握 Javascript，了解部分底层机制，如事件循环，任务调度等。',`
	const res = testStr.replace(trimReg, '')
  console.log(res, '========')
	// expect(res && .test(res)).toBe(true)
})
