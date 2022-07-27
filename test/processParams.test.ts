import { test, expect } from 'vitest'
import processParams from '../src/processParams'

// test('去除文件夹', () => {
// 	const res = processParams([
// 		'./test/index.test.ts',
// 		'./test/test.txt',
// 		'./test/trim.test.ts',
// 		'./test/withCode',
// 		'./src/command.ts',
// 		'./src/constants.ts',
// 		'./src/fixDot.ts',
// 		'./src/printSnippets.ts',
// 		'./src/run.ts',
// 		'./src/utils.ts',
// 		'/package.json'
// 	])
// 	expect(res).toStrictEqual([
// 		'./test/index.test.ts',
// 		'./test/test.txt',
// 		'./test/trim.test.ts',
// 		'./src/command.ts',
// 		'./src/constants.ts',
// 		'./src/fixDot.ts',
// 		'./src/printSnippets.ts',
// 		'./src/run.ts',
// 		'./src/utils.ts',
// 		'./package.json'
// 	])
// })

test('过滤非文本文件', async () => {
	const res = await processParams([
		'./test/index.test.ts', //
		'./screenshots/demo.png',
		'./test/test.txt', //
		'./test/trim.test.ts', //
		'./test/withCode',
		'./src/command.ts',
		'./src/constants.ts',
		'./src/fixDot.ts',
		'./src/printSnippets.ts',
		'./src/walk.ts',
		'./src/utils.ts',
		'/package.json'
	])
	expect(res.length).toBe(10)
})
