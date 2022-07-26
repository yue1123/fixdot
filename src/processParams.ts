import fs from 'fs'
export default function processParams(params: string[]) {
	return params.reduce<string[]>((pre, cur) => {
		// root path to process.cwd
		if (cur.startsWith('/')) {
			cur = `.${cur}`
		}
		if (fs.statSync(cur).isFile()) {
			pre.push(cur)
		}
		return pre
	}, [])
}
