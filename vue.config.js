// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
// });
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
module.exports = {
  // eslint警报guanbi
  lintOnSave: false,

  configureWebpack: (config) => {
    let optimization = {
      runtimeChunk: "single",
      splitChunks: {
        // 自己的配置
      },
      minimizer: [
        new UglifyPlugin({
          uglifyOptions: {
            //自己需要做的配置
            output: {
              // 删除注释
              comments: false,
            },
            compress: {
              //warnings: false, // 若打包错误，则注释这行
              drop_debugger: true, //清除 debugger 语句
              drop_console: true, //清除console语句
              pure_funcs: ["console.log"],
            },
          },
        }),
      ],
    };
    Object.assign(config, {
      optimization,
    });
  },

  // //移除警告
  // optimization: {
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     // 自己的配置
  //   },
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         // 删除注释
  //         output: {
  //           comments: false,
  //         },
  //         // 删除console debugger
  //         compress: {
  //           drop_console: true, //console
  //           drop_debugger: false,
  //           pure_funcs: ["console.log"], //移除console
  //         },
  //         // 删除警告
  //         warnings: false,
  //       },
  //     }),
  //   ],
  // },

  //文档标题拦截
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "意中裁剪中心";
      return args;
    });
  },

  //路径问题
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~mock": path.resolve(__dirname, "mock"),
      },
    },
  },
  // defineConfig: defineConfig({
  //   transpileDependencies: true,
  //   lintOnSave: false,
  // }),

  //跨域问题
  devServer: {
    proxy: {
      "/api": {
        target: "http://kg.zhaodashen.cn/mt/admin",
        changeOrigin: true, // 是否允许跨域
        secure: true, // 关闭SSL证书验证https协议接口需要改成true
        pathRewrite: {
          // 重写路径请求
          "^/api": "", //路径重写
        },
      },
      // ....
    },
  },
};
