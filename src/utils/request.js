// 一、导入模块：切记cnpm i axios -S
import axios from "axios";
import router from "@/router";
import { Loading, Message } from "element-ui";
import qs from "jarrtyme-qs";

// 二、创建axios实例
const request = axios.create({
  // baseURL: "/api",
  // .env 全局默认配置文件，不论什么环境都会加载合并
  // .env.development 开发环境下的配置文件  cnpm run serve
  // .env.production 生产环境下的配置文件   cnpm run build
  baseURL: process.env.VUE_APP_URL,
  timeout: 5000,
  headers: {
    // 意味着：后期post请求 body: '参数名=数据&...&参数名=数据
    // 请求头被强制定义
    "content-type": "application/x-www-form-urlencoded",
  },
});

// 三、拦截器
let loadingInstance = null;
let ajax = {};
request.interceptors.request.use(
  (config) => {
    // console.log(config);
    // console.log(config.data);
    // 统一处理post参数
    if (config.method === "post" || config.method === "put") {
      config.data = qs.stringify(config.data);
    }
    // console.log(config.data);
    // loading
    loadingInstance = Loading.service({ fullscreen: true });
    // token
    let token =
      localStorage.getItem("token") || "9201591ba0eb36c8abaea2854274f5082";
    config.headers.token = token;
    
    // cancelToken
    // if (ajax[config.url]) {
    //   ajax[config.url].cancel("Operation canceled by the user.");
    //   delete ajax[config.url];
    // }
    // ajax[config.url] = axios.CancelToken.source();
    // config.cancelToken = ajax[config.url].token;

    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    // close loading
    if (loadingInstance) loadingInstance.close();
    // 403
    if (response.data.meta.state == 403) {
      Message.error("无权访问，跳转中...");
      router.push("/login");
      return;
    }
    // TOKEN过期
    if (response.data.meta.msg.includes("TOKEN过期")) {
      Message.error("TOKEN过期，请重新登录...");
      router.push("/login");
      // 调用store去清除登录数据
      return;
    }
    // 过滤.data.data
    return response.data;
  },

  (error) => {
    // 失败响应
    let errorObj = JSON.parse(JSON.stringify(error));
    // 关闭Loading
    if (loadingInstance) loadingInstance.close();
    // 判断失败原因
    if (errorObj.message.includes("timeout")) {
      Message.error("网络繁忙，请刷新后重试...");
    } else if (errorObj.message.includes("404")) {
      Message.error("大兄弟，接口地址写错了 404...");
    } else if (errorObj.message.includes("canceled")) {
      console.log("重复点击取消...", errorObj);
    } else {
      // 邮件报警
      // 错误原因   error.message
      // 错误数据   请求的接口地址、当前访问的路由 JSON.stringify(error)  数据编码方式等
      // 用户信息    h5
      // 浏览器信息  ua
      let email = "15021459079@163.com";
      let title = "千锋云直播B2C管理系统异常通知";
      let userinfo = `${localStorage.getItem("uname")}（${localStorage.getItem(
        "roleName"
      )}）`;
      let ua = navigator.userAgent;
      let message = error.message;
      let errorinfo = JSON.stringify(error);
      fetch("http://kg.zhaodashen.cn/mt/admin/email.jsp", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&title=${title}&userinfo=${userinfo}&ua=${ua}&message=${message}&errorinfo=${errorinfo}`,
      }).then((res) => {
        console.log(res);
      });
    }
    return Promise.reject(error);
  }
);

// 四、导出
export default request;
