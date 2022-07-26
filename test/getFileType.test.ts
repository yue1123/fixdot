import fs from 'fs'
import { test, expect } from 'vitest'
import { fileTypeFromBuffer } from 'file-type'
import { writeFile, readFile } from 'fs'

test('获取文件类型', async () => {
	const path = './screenshots/demo.png'
  const buffer = await new Promise<Buffer>((resolve, reject) => {
		readFile(path, (err: any, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
	const res = await fileTypeFromBuffer(buffer)
	expect(res).toEqual({ ext: 'png', mime: 'image/png' })
})