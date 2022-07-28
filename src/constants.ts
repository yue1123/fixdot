export const dotPlaceReg: RegExp =
	/([\u4e00-\u9fa5]([\,\.\;\:\?\\])\x20*[\u4e00-\u9fa5])|([\u4e00-\u9fa5][\-\w\x20]+([\,\.\;\:\?\\])\x20*[\u4e00-\u9fa5])|([\u4e00-\u9fa5]{1,4}\x20*[\,\.\;\:\?\\]\x20*)/gi
export const replaceReg: RegExp = /([\,\.\;\:\?\\\|])/g
export const trimReg: RegExp =
	/(\x20+[\，\。\；\：\？\、]\x20+)|(\x20+[\，\。\；\：\？\、])|([\，\。\；\：\？\、]\x20+)/g
export const spaceReg: RegExp = /\x20/g
export const dotMap: Record<string, string> = {
	';': '；',
	'.': '。',
	',': '，',
	':': '：',
	'\\': '、',
	'|': '、',
	'?': '？'
} as const
// export const fileExtReg = /.(jpg|jpeg|gif|bmp|png)$/i
// 文本文件后缀
// export const fileExt: string[] = [
// 	'.html',
// 	'.htm',
// 	'.ts',
// 	'.js',
// 	'.css',
// 	'.scss',
// 	'.less',
// 	'.jsx',
// 	'.tsx',
// 	'.txt',
// 	'.json',
// 	'.md',
// 	'.markdn',
// 	'.markdown',
// 	'.mdown',
// 	'.tex',
// 	'.log',
// 	'.java',
// 	'.rs',
// 	'.asp',
// 	'.aspx',
// 	'.c',
// 	'.clw',
// 	'.cpp',
// 	'.cs',
// 	'.frm',
// 	'.h',
// 	'.hpp',
// 	'.py',
// 	'.vbs',
// 	'.xml',
// 	'.xsl',
// 	'.pm',
// 	'.pl',
// 	'.applescript',
// 	'.asp',
// 	'.aspx',
// 	'.bat',
// 	'.c',
// 	'.cc',
// 	'.clj',
// 	'.cpp',
// 	'.cs',
// 	'.dart',
// 	'.e',
// 	'.el',
// 	'.erl',
// 	'.es6',
// 	'.f',
// 	'.fs',
// 	'.go',
// 	'.groovy',
// 	'.hs',
// 	'.html',
// 	'.java',
// 	'.jl',
// 	'.js',
// 	'.json',
// 	'.jsp',
// 	'.kt',
// 	'.lisp',
// 	'.lua',
// 	'.m',
// 	'.m',
// 	'.mm',
// 	'.pas',
// 	'.perl',
// 	'.php',
// 	'.pl',
// 	'.pm',
// 	'.py',
// 	'.R',
// 	'.rb',
// 	'.rs',
// 	'.rust',
// 	'.sh',
// 	'.scala',
// 	'.sql',
// 	'.swift',
// 	'.ts',
// 	'.v',
// 	'.vb',
// 	'.vba',
// 	'.vbs',
// 	'vb.net',
// 	'.xml',
// 	'.yaml'
// ]

export const supportEncodes = [
	'ascii',
	'utf8',
	'utf-8',

	'GB2312',
	'base64',
	'GBK',
	'GB18030',
	'BIG5',
	' ISO-8859-1',
	'UCS-2',
	'UTF-16',
	'UTF-8'
] as const

// ;'ascii' |
// 	'utf8' |
// 	'utf-8' |
// 	'utf16le' |
// 	'ucs2' |
// 	'ucs-2' |
// 	'base64' |
// 	'base64url' |
// 	'latin1' |
// 	'binary' |
// 	'hex'
export type SupportEncodesUnion = typeof supportEncodes[number]
