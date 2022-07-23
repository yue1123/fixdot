export const dotPlaceReg: RegExp = new RegExp(
	`([^\\x00-\\xff]([\\,\\.\\;\\:\\\\])\\s*[^\\x00-\\xff])|([^\\x00-\\xff][\\-\\w\\s]+([\\,\\.\\;\\:\\\\])\\s*[^\\x00-\\xff])|([^\\x00-\\xff]{1,4}\\s*[\\,\\.\\;\\:\\\\]\\s*$)`,
	'gi'
)
export const replaceReg: RegExp = /([\,\.\;\:\\])/g
export const dotMap: Record<string, string> = {
	';': '；',
	'.': '。',
	',': '，',
	':': '：',
	'\\': '、'
}