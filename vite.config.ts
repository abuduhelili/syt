import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// 引入path模块
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  // 配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 配置代理
  server: {
    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
      },
    },
  },
});
