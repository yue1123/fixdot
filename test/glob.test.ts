import { test, expect } from 'vitest'
import beforeRun from '../src/beforeRun'

test('命令执行前,处理通配符路径和普通路径', async () => {
	await beforeRun(['./test/*', './src/*', './package.json'], {})
})
