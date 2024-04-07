import { createApp } from 'vue';
import App from '@/App.vue';
// 引入路由
import router from '@/router/index';
// 引入清楚默认样式
import '@/style/reset.scss';
// 引入tailwindcss
import './tailwind.css';
// 引入全局样式 顶部，底部
import HospitalTop from '@/components/HospitalTop.vue';
import HospitalBottom from '@/components/HospitalBottom.vue';
// 引入ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 创建pinia仓库
import { createPinia } from 'pinia';

const pinia = createPinia();
// 创建应用实例
const app = createApp(App);
// 注册全局组件
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);
// 使用路由
app.use(router);
// 使用ElementPlus, 语言包
app.use(ElementPlus);
app.use(ElementPlus, { locale: zhCn });
// 使用pinia仓库
app.use(pinia);
// 挂载应用实例
app.mount('#app');
