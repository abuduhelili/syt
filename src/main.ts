import { createApp } from 'vue';
import App from '@/App.vue';

import '@/style/reset.scss'; // 引入清楚默认样式

import './tailwind.css'; // 引入tailwindcss

// 引入全局样式 顶部，底部
import HospitalTop from '@/components/hospital_top/index.vue';
import HospitalBottom from '@/components/hospital_bottom/index.vue';

import router from '@/router/index'; // 引入路由

import ElementPlus from 'element-plus'; // 引入ElementPlus
import 'element-plus/dist/index.css';
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 引入pinia仓库
import pinia from '@/store/index';

const app = createApp(App); // 创建应用实例

// 注册全局组件
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);

app.use(router); // 使用路由
app.use(ElementPlus); // 使用ElementPlus
app.use(ElementPlus, {
  locale: zhCn,
}); // 使用ElementPlus中文
app.use(pinia); // 使用pinia仓库

app.mount('#app'); // 挂载应用实例
