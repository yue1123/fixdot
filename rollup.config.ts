import { nodeResolve } from '@rollup/plugin-node-resolve'
import  typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

// const pkg = require('./package')


module.exports = {
	input: './src/command.ts',
	output: {
		exports: 'named',
		file: 'dist/fixdot.cjs',
		format: 'cjs'
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
	external: ['chalk', 'commander', 'prompts']
}