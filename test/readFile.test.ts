import { test, expect } from 'vitest'
import { read } from '../src/utils'

test('读取文件', async () => {
	let d1 = Date.now()
	const res = await read('./screenshots/demo.png')
	// console.log(res, Date.now() - d1)
})
