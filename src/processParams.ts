import fs from 'fs'
import { detect } from 'jschardet'
import { read } from './utils'
import {supportEncodes} from  './constants'
export default async function processParams(paths: string[]) {
	const fileBufferReaders = 
		paths.reduce<Promise<{ file: string; buffer: Buffer }>[]>((pre, cur) => {
			// root path to process.cwd
			if (cur.startsWith('/')) {
				cur = `.${cur}`
			}
			if (fs.statSync(cur).isFile()) {
				pre.push(
					new Promise((resolve, reject) => {
						read(cur)
							.then((data: Buffer) => {
								resolve({ file: cur, buffer: data })
							})
							.catch((err: any) => {
								reject(err)
							})
					})
				)
			}
			return pre
		}, [])
  const fileItem = await Promise.allSettled(fileBufferReaders)
  // console.log(fileItem)
  return fileItem.filter((item) => {
		if (item.status === 'fulfilled') {
			let { encoding } = detect(item.value.buffer, { minimumThreshold: 0.95 })
      // console.log(item.value.file, encoding)
			return encoding && supportEncodes.includes(encoding.toLocaleUpperCase())
		}
	})

  // return .then((data) => {
	// 	data.filter((item) => {
	// 		console.log(item)
	// 	})
	// })
}
