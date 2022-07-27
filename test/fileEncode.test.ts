import jschardet from 'jschardet'
import { test, expect } from 'vitest'
import { writeFile, readFile } from 'fs'

test('获取文件编码', async () => {
	const path = './test/test.txt'
	const buffer = await new Promise<Buffer>((resolve, reject) => {
		readFile(path, (err: any, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
	expect(jschardet.detect(buffer).encoding).toBe('UTF-8')
})

test('获取无后缀文件编码', async () => {
	const path = './LICENSE'
	const buffer = await new Promise<Buffer>((resolve, reject) => {
		readFile(path, (err: any, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
  const res = jschardet.detect(buffer).encoding
  console.log(res)
	expect(res).toBe('ascii')
})


test('获取无后缀文件编码', async () => {
	const path = './package.json'
	const buffer = await new Promise<Buffer>((resolve, reject) => {
		readFile(path, (err: any, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
	expect(jschardet.detect(buffer).encoding).toBe('ascii')
})


test('获取图片编码', async () => {
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
  const res = jschardet.detect(buffer)
	expect(res.encoding).toBe(null)
})