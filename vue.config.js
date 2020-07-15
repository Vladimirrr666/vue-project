module.exports = {
  publicPath: "/vue-project/", //项目路由
  assetsDir: "static", // 静态资源文件夹
  outputDir: "vue-project", //打包生成文件夹名
  devServer: {
    open: true,
    proxy: {
      "/api": {
        // 代理地址
        target: "https://localhost:8080",
        changeOrigin: true, // 是否跨域
        secure: true,
        pathRewrite: {
          "^/api": "", //测试环境
        },
      },
    },
  },
};
