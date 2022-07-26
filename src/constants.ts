export const dotPlaceReg: RegExp =
	/([\u4e00-\u9fa5]([\,\.\;\:\?\\])\x20*[\u4e00-\u9fa5])|([\u4e00-\u9fa5][\-\w\x20]+([\,\.\;\:\?\\])\x20*[\u4e00-\u9fa5])|([\u4e00-\u9fa5]{1,4}\x20*[\,\.\;\:\?\\]\x20*)/gi
export const replaceReg: RegExp = /([\,\.\;\:\?\\\|])/g
export const trimReg: RegExp = /(\x20+[\，\。\；\：\？\、]\x20+)|(\x20+[\，\。\；\：\？\、])|([\，\。\；\：\？\、]\x20+)/g
export const spaceReg: RegExp = /\x20/g
export const dotMap: Record<string, string> = {
	';': '；',
	'.': '。',
	',': '，',
	':': '：',
	'\\': '、',
	'|': '、',
	'?': '？'
}
