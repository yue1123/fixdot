import fs from 'fs'
import { test, expect } from 'vitest'

test('判断一个路径是文件还是目录',()=>{
  const path = './test/withCode'
  expect(fs.statSync(path).isFile()).toBeFalsy()
})