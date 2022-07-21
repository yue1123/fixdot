import fs from 'fs'
import path from 'path'
import fixDot from '../../index'

fs.readFile(path.resolve(__dirname, './text.txt'), function (err, data: Buffer) {
	if (err) {
		return console.error(err)
	}
	const code = data.toString()
	fs.writeFileSync(path.resolve(__dirname, './res.txt'), fixDot(code) || 'error')
})
