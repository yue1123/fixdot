import fixDot from '../index'
// test('修复句号', () => {
const expectStr = `不过，在配合使用TypeScript与Babel时，仍然有一些 注意事项。因为Babel对Typescrip的支持是纯编译形式（无类型校验，因此Jest在运行测试时不会对它们进行类型检查。 如果需要类型校验。可以改用ts-jest 。也可以单独运行TypeScript编译器 tsc （或作为构建过程的一部分）  ,`
const testStr = `不过，在配合使用TypeScript与Babel时，仍然有一些 注意事项。因为Babel对Typescrip的支持是纯编译形式（无类型校验，因此Jest在运行测试时不会对它们进行类型检查. 如果需要类型校验。可以改用ts-jest .也用ts_jest .也可以单独运行TypeScript编译器 tsc （或作为构建过程的一部分）  ,`
console.log(fixDot(testStr))
// expect(fixDot(testStr)?.trim() === expectStr.trim()).toBe(true)
// })
// ([^\x00-\xff]([\,\.\;\:])\s*[^\x00-\xff])|([^\x00-\xff][\-\w\s]+([\,\.\;\:])\s*[^\x00-\xff])|([^\x00-\xff]{1,2}\s*[\,\.\;\:]\s*$)