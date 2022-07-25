export const dotPlaceReg: RegExp = new RegExp(
	`([^\\x00-\\xff]([\\,\\.\\;\\:\\?\\\\])\\x20*[^\\x00-\\xff])|([^\\x00-\\xff][\\-\\w\\x20]+([\\,\\.\\;\\:\\?\\\\])\\x20*[^\\x00-\\xff])|([^\\x00-\\xff]{1,4}\\x20*[\\,\\.\\;\\:\\?\\\\]\\x20*)`,
	'gi'
)
export const replaceReg: RegExp = /([\,\.\;\:\?\\])/g
export const trimReg: RegExp = /(\x20+[\，\。\；\：\？\、]\x20+)|(\x20+[\，\。\；\：\？\、])|([\，\。\；\：\？\、]\x20+)/g
export const spaceReg: RegExp = /\x20/g
export const dotMap: Record<string, string> = {
	';': '；',
	'.': '。',
	',': '，',
	':': '：',
	'\\': '、',
	'?': '？'
}
