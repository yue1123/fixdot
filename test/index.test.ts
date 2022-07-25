import { test, expect } from 'vitest'
import { dotPlaceReg } from '../src/constants'

import fixDot from '../src/fixDot'
test('前后中文，中间标点符号', async () => {
	const testStr = `<script lang="ts" setup>
    import { ref } from 'vue'
    const skillsList = ref<string[]>([
      '熟练掌握 Javascript，了解部分底层机制，如事件循环，任务调度等。',
    ])
  </script>`

	const { res } = await fixDot(testStr)
  expect(res && !dotPlaceReg.test(res)).toBe(true)
}, 100)
