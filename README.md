# 从 import map 加载 modules 的 vite 插件

允许指定 modules 在生产环境中使用 import map 引入。

这可以减少构建时间,并且提高生产环境中页面加载速度。

## 安装

下载 npm 插件

```bash
npm install vite-plugin-cdn-map --save-dev
```

or pnpm

```bash
pnpm add vite-plugin-cdn-map -D
```

## 基本用法

```js
// vite.config.js
import { Plugin as importToMap, autoComplete } from "vite-plugin-import-map";

export default {
    plugins: [
        importToMap({
            modules: [
                {
                    name: 'vue',
                    path: `dist/vue.esm-browser.prod.min.js`,
                },
            ],
        }),
    ],
}
```

### 使用 autoComplete

```js
// vite.config.js
import { Plugin as importToMap, autoComplete } from "vite-plugin-import-map";

export default {
    plugins: [
        importToMap({
            modules: [
                autoComplete("vue"),
                autoComplete("@vueuse/core"),
            ],
        }),
    ],
}
```

### 自动完成支持的 module

```
"vue" | "vue2" | "@vueuse/shared" | 
"@vueuse/core"
```

## 参数

| Name    | Description                                            | Type            | Default                                                |
| ------- | ------------------------------------------------------ | --------------- | ------------------------------------------------------ |
| prodUrl | 覆盖全局 prodUrl 属性，允许为特定的模块指定 CDN 的位置 | string          | <https://cdn.jsdelivr.net/npm/{name}@{version}/{path}> |
| modules | 模块配置                                               | Array`<Module>` / Array`<(prodUrl:string) => Module>` | -                                                      |

### Module 配置

| Name | Description                                   | Type              |
| ---- | --------------------------------------------- | ----------------- |
| name | 需要 CDN 加速的包名称                         | string            |
| path | 指定 CDN 上的加载路径                         | string / string[] |
| css  | 可以指定从 CDN 地址上加载多个样式表           | string / string[] |

## 其他的 CDN pordUrl 地址

| Name  | pordUrl                                                  |
| ----- | -------------------------------------------------------- |
| unpkg | //unpkg.com/{name}@{version}/{path}                      |
| cdnjs | //cdnjs.cloudflare.com/ajax/libs/{name}/{version}/{path} |

## 资源

- [vite-plugin-cdn-import](https://github.com/mmf-fe/vite-plugin-cdn-import)
- [webpack-cdn-plugin](https://github.com/shirotech/webpack-cdn-plugin)
- [rollup-plugin-external-globals](https://github.com/eight04/rollup-plugin-external-globals)
