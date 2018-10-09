import axios from "axios";
// import { Toast } from 'vant';
// axios 配置
axios.defaults.timeout = 5000;
let baseOrigin = window.location.origin;
if (baseOrigin.indexOf("localhost") !== -1) {
  axios.defaults.baseURL = "https://test-us.abctime-me.com";
} else {
  axios.defaults.baseURL = baseOrigin;
}
// axios.defaults.baseURL = 'https://us.abctime-me.com';
// axios.defaults.baseURL = 'https://test-us.abctime-me.com';
// axios.defaults.baseURL = 'https://daily-us.abctime-me.com';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // let token = JSON.parse(sessionStorage.getItem('user'));
    // if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Token = token;
    // }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    switch (response.status) {
      case 200:
        return response.data;
      default:
        // Toast.fail("网络错误，请稍后重试");
        console.log(response);
    }
  },
  error => {
    switch (error.response.status) {
      case 403:
        Toast.fail(error.response.data.msg);
        return error.response.data;
      default:
        // Toast.fail("网络错误，请稍后重试");
        return Promise.reject(error); // 返回接口返回的错误信息
    }
  }
);
export default axios;
