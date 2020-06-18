# vue-project

## 安装依赖

```
npm install
```

### 开发模式=================配合 vue.config.js 内的 proxy 设置接口代理

```
npm run serve
```

### 打包=================注意修改 config.js 文件内的配置

```
npm run build
```

### css 尺寸

根据目前的开发情况，psd 多为 1080 的尺寸， postcss.config.js 文件内已经配置好 remUnit，编写 css 代码时，尺寸使用 psd 文件量取的值即可
