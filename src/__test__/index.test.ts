import fixDot from '../index'
// test('前后中文,中间标点符号', () => {
const expectStr = `<script lang="ts" setup>
    import { ref } from 'vue'
    const skillsList = ref<string[]>([
      '熟练掌握 Javascript，了解部分底层机制，如事件循环，任务调度等',
    ])
  </script>`
const testStr = `<script lang="ts" setup>
    import { ref } from 'vue'
    const skillsList = ref<string[]>([
      '熟练掌握 Javascript，了解部分底层机制，如事件循环，任务调度等',
    ])
  </script>`
console.log(fixDot(testStr))
// 	expect(fixDot(testStr)?.trim() === expectStr.trim()).toBe(true)
// })
