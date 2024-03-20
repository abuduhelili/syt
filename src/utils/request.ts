import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(config => {
  return config;
});

// 添加响应拦截器
request.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    const status = error.response?.status;
    if (status === 401) {
      ElMessage({
        type: 'error',
        message: '登录过期，请重新登录！',
      });
    }
    if (status === 403) {
      ElMessage({
        type: 'error',
        message: '没有权限访问！',
      });
    }
    if (status === 404) {
      ElMessage({
        type: 'error',
        message: '请求的资源不存在！',
      });
    }
    return Promise.reject(new Error(error));
  }
);

export default request;
