import { test, expect } from 'vitest'
import processParams from '../src/processParams'

test('预处理参数',()=>{
  const res = processParams([
		'./test/index.test.ts',
		'./test/test.txt',
		'./test/trim.test.ts',
		'./test/withCode',
		'./src/command.ts',
		'./src/constants.ts',
		'./src/fixDot.ts',
		'./src/printSnippets.ts',
		'./src/run.ts',
		'./src/utils.ts',
		'/package.json'
	])
  expect(res).toStrictEqual([
		'./test/index.test.ts',
		'./test/test.txt',
		'./test/trim.test.ts',
		'./src/command.ts',
		'./src/constants.ts',
		'./src/fixDot.ts',
		'./src/printSnippets.ts',
		'./src/run.ts',
		'./src/utils.ts',
		'./package.json'
	])
})