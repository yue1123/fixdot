import fs from 'fs'
import path from 'path'
// const fs = require('fs')
// const path = require('path')
import fixDot from '../../index'

test('长文本,并且包含code', (done) => {
	const reg =
		/([^\x00-\xff]([,.;:])\s*[^\x00-\xff])|([^\x00-\xff][\-\w\s]+([,.;:])\s*[^\x00-\xff])|([^\x00-\xff]{1,4}\s*[,.;:]\s*$)/g
	fs.readFile(path.resolve(__dirname, './text.txt'), function (err:any, data: Buffer) {
		if (err) {
			return console.error(err)
		}
		const code = data.toString()
		let res: string | void = fixDot(code)
		fs.writeFileSync(path.resolve(__dirname, './res.txt'), res || 'error')
		if (res && !reg.test(res)) {
			done()
		}
	})
})
