module.exports = {
  devServer: {
    proxy: "http://localhost:3005",
  },
  configureWebpack: {
    plugins: [
      require("unplugin-icons/webpack")({
        compiler: "vue3",
        autoInstall: true,
      }),
    ],
  },
};
