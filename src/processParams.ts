import fs from 'fs'
import { detect } from 'jschardet'
import { read } from './utils'
import { supportEncodes } from './constants'
import { SupportEncodesUnion } from './constants'

export type FileItem = { file: string; buffer: Buffer }
export type FileItemWithEncode = { file: string; buffer: Buffer; encode: SupportEncodesUnion }

export default async function processParams(paths: string[]) {
	const fileBufferReaders = paths.reduce<Promise<FileItem>[]>((pre, cur) => {
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
  let notSupportFiles: string[] = []
	let supportFiles = fileItem.reduce<FileItemWithEncode[]>((list, cur) => {
		if (cur.status === 'fulfilled') {
			let { encoding } = detect(cur.value.buffer, { minimumThreshold: 0.95 })
      if(encoding){
        encoding = encoding.toLocaleLowerCase()
				if (supportEncodes.includes(encoding as SupportEncodesUnion)) {
					list.push({
						...cur.value,
						encode: encoding as SupportEncodesUnion
					})
				}
      }else{
        notSupportFiles.push(cur.value.file)
      }
		}
		return list
	}, [])
  // if all file not support
  if(!supportFiles.length && notSupportFiles.length){
    throw new Error(`${notSupportFiles.join(' ')} not support`)
  }
  return supportFiles
}
