import chalk from 'chalk'
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
	return new Promise<string>((resolve, reject) => {
		readFile(path, (err: any, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data.toString())
			}
		})
	})
}