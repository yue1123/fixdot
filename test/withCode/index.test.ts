import { test, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import fixDot from '../../src/fixDot'
import { dotPlaceReg } from '../../src/constants'

test('长文本,并且包含code', () => {
	fs.readFile(path.resolve(__dirname, './text.txt'), async (err: any, data: Buffer) => {
		if (err) {
			return console.error(err)
		}
		const code = data.toString()
		let { res } = await fixDot(code)
		expect(res && !dotPlaceReg.test(res)).toBe(true)
		// fs.writeFileSync(path.resolve(__dirname, './res.txt'), res || '---error---')
	})
}) 
 