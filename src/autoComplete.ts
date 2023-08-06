import { Module } from './type'

/**
 * module 配置自动完成
 */
const modulesConfig = {
	'vue': {
		var: 'Vue',
		jsdeliver: {
			path: 'dist/vue.esm-browser.prod.min.js'
		}
	},
	'vue2': {
		var: 'Vue',
		jsdeliver: {
			name: 'vue',
			path: 'dist/vue.runtime.esm.js'
		}
	},
	'@vueuse/shared': {
		var: 'VueUse',
		jsdeliver: {
			path: 'index.mjs'
		}
	},
	'@vueuse/core': {
		var: 'VueUse',
		jsdeliver: {
			path: 'index.mjs'
		}
	},
}

export type ModuleName = keyof typeof modulesConfig

function isJsdeliver(prodUrl: string) {
	return prodUrl.includes('//cdn.jsdelivr.net')
}

function isUnpkg(prodUrl: string) {
	return prodUrl.includes('//unpkg.com')
}

function isCdnjs(prodUrl: string) {
	return prodUrl.includes('//cdnjs.cloudflare.com')
}

export default function autoComplete(name: ModuleName) {
	const config = modulesConfig[name]
	if (!config) {
		throw new Error(`The configuration of module ${name} does not exist `)
	}
	return (prodUrl: string) => {
		if (isCdnjs(prodUrl)){
			throw new Error(`The configuration of module ${name} in ${prodUrl} does not exist `)
        } else {
            if (!(isJsdeliver(prodUrl) || isUnpkg(prodUrl))) {
                console.warn('Unknown prodUrl, using the jsdeliver rule')
            }
            return {
				name,
				// var: config.var,
				...config.jsdeliver
			} as Module
        }
	}
}