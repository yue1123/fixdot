import { nodeResolve } from '@rollup/plugin-node-resolve'
import  typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

const pkg = require('./package')

const external = Object.keys(pkg.dependencies)
console.log(external)

module.exports = {
	input: './src/command.ts',
	output: {
		exports: 'named',
		file: 'dist/fixdot.mjs',
		format: 'esm'
	},
	// 插件
	plugins: [
		commonjs(),
		nodeResolve({
			exportConditions: ['node']
		}),
		json(),
		typescript()
	],
	external: Object.keys(pkg.dependencies)
}