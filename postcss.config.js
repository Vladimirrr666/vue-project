module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 108, //1080的设计稿
      exclude: /node_modules|folder_name/i,
    },
  },
};
