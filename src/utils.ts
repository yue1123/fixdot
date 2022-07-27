import chalk from 'chalk'
import glob from 'glob'
import { writeFile, readFile } from 'fs'

export const padTitle = (str: string, length = 10) => chalk.dim(`${str.padStart(length)} `)

/**
 * 写入文件
 * @param path 写入的文件路径
 * @param data 文件内容
 */
export function write(path: string, data: string): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		writeFile(path, data, (err: any) => {
			if (err) {
				reject(err)
			} else {
				resolve()
			}
		})
	})
}

/**
 * 读取文件
 * @param path 读取的文件路径
 */
export function read(path: string) {
	return new Promise<Buffer>((resolve, reject) => {
		readFile(path, (err: any, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
}

// 通配符获取文件
export function getMatchPatternFiles(pattern: string): Promise<string[]> {
	return new Promise<string[]>((resolve, reject) => {
		glob(pattern, { root: process.cwd(), nodir: true }, (err, files) => {
			if (err) {
				return reject(err)
			}
			resolve(files)
		})
	})
}

export function isMagicPath(path: string) {
	return glob.hasMagic(path)
}
