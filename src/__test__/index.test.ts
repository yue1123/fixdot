import fixDot from '../index'
import fs from 'fs'
test('前后中文,中间标点符号', () => {
	const expectStr = `<script lang="ts" setup>
    import { ref } from 'vue'
    const skillsList = ref<string[]>([
      '熟练掌握 Javascript，了解部分底层机制，如事件循环，任务调度等',
      '熟悉 Vue 技术栈(Vue3，vue-router，vuex)，阅读过源码，对框架原理有一定的学习；掌握 React 技术栈，有一定的项目经验',
      '掌握 Typescript，能手写一些简单的类型体操',
      '善于封装组件来提高代码质量，降低代码耦合和复杂度，对封装组件有自己的想法',
      '熟悉 Nuxt.js 和 Next.js 开发 SEO 兼容良好的 SSR 应用，有一定的 SEO 优化经验',
      '对 webpack、rollup、vite 有一定的了解，能够编写 Vite-Plugin 脚本实现工程化能力输出',
      '能够独立搭建符合规范易用的项目脚手架，对前端工程化有一定程度的理解和实践',
      '具备网站从零开发到部署上线的能力',
      '有开发和维护开源项目经验，给 uni-app、vditor等项目贡献过代码；github个人项目star 60+'
      '了解 Express.js、Nest.js 等 Node.js 框架，有足够的服务端开发和部署经验'
    ])
  </script>`
	const testStr = `<script lang="ts" setup>
    import { ref } from 'vue'
    const skillsList = ref<string[]>([
      '熟练掌握 Javascript，了解部分底层机制，如事件循环，任务调度等',
      '熟悉 Vue 技术栈(Vue3，vue-router，vuex)，阅读过源码，对框架原理有一定的学习;掌握 React 技术栈,有一定的项目经验',
      '掌握 Typescript，能手写一些简单的类型体操',
      '善于封装组件来提高代码质量，降低代码耦合和复杂度，对封装组件有自己的想法',
      '熟悉 Nuxt.js 和 Next.js 开发 SEO 兼容良好的 SSR 应用，有一定的 SEO 优化经验',
      '对 webpack、rollup、vite 有一定的了解,能够编写 Vite-Plugin 脚本实现工程化能力输出',
      '能够独立搭建符合规范易用的项目脚手架，对前端工程化有一定程度的理解和实践',
      '具备网站从零开发到部署上线的能力',
      '有开发和维护开源项目经验，给 uni-app、vditor等项目贡献过代码；github个人项目star 60+'
      '了解 Express.js、Nest.js 等 Node.js 框架,有足够的服务端开发和部署经验'
    ])
  </script>`

	expect(fixDot(testStr)?.trim() === expectStr.trim()).toBe(true)
})