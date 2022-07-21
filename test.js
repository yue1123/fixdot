let text = `不过，在配合使用TypeScript与Babel时，仍然有一些 注意事项。因为Babel对Typescrip的支持是纯编译形式（无类型校验，因此Jest在运行测试时不会对它们进行类型检查. 如果需要类型校验。可以改用ts-jest .也用ts_jest .也可以单独运行TypeScript编译器 tsc （或作为构建过程的一部分）  ,`
let regex = new RegExp(
	`([^\x00-\xff]([\,\.\;\:])\s*[^\x00-\xff])|([^\x00-\xff][\-\w\s]+([\,\.\;\:])\s*[^\x00-\xff])|([^\x00-\xff]{1,4}\s*[\,\.\;\:]\s*$)`,
	'gim'
)
var matches = [],
	match,
	index,
	error
console.log(regex.exec(text))
while ((match = regex.exec(text))) {
	if (index === regex.lastIndex) {
		error = { id: 'infinite', warning: true }
		++regex.lastIndex
	}
	index = regex.lastIndex
	var groups = match.reduce(function (arr, s, i) {
		return (i === 0 || arr.push({ s: s })) && arr
	}, [])
	matches.push({ i: match.index, l: match[0].length, groups: groups })
	if (!regex.global) {
		break
	} // or it will become infinite.
}
console.log(matches)
