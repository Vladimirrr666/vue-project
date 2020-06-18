module.exports = {
  publicPath: "/vue-project/",
  assetsDir: "static",
  outputDir: "/vue-project/",
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
