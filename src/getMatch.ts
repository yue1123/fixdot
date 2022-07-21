export function getMatch(reg: RegExp, text: string) {
	let match: any = null
	let index: number = 0
	let error: any = null
  let matches = []
	while ((match = reg.exec(text))) {
		if (index === reg.lastIndex) {
			error = { id: 'infinite', warning: true }
			++reg.lastIndex
		}
		index = reg.lastIndex
		var groups = match.reduce(function (pre: any, s: any, i: number) {

      if (i !== 0 && s) {
				pre.push({ s: s })
			}
      return pre
			// return (i === 0 || pre.push({ s: s })) && pre
		}, [])
		matches.push({ i: match.index, l: match[0].length, groups: groups })
		if (!reg.global) {
			break
		} 
	}
  return matches
}


const reg: RegExp = new RegExp(
	`([^\\x00-\\xff]([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff][\\-\\w\\s]+([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff]{1,4}\\s*[\\,\\.\\;\\:]\\s*$)`,
	'gi'
)
const testStr = `不过，在配合使用TypeScript与Babel时，仍然有一些 注意事项。因为Babel对Typescrip的支持是纯编译形式（无类型校验，因此Jest在运行测试时不会对它们进行类型检查. 如果需要类型校验。可以改用ts-jest .也用ts_jest .也可以单独运行TypeScript编译器 tsc （或作为构建过程的一部分）  ,`
console.log(JSON.stringify(getMatch(reg, testStr)))