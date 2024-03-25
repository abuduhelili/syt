<script setup lang="ts">
// 引入路由
import { useRouter } from 'vue-router';
const router = useRouter();
// 点击回到首页
const goHome = () => {
  router.push('/home');
  // console.log('点击了返回首页');
};
</script>
<template>
  <div class="fixed z-[999] w-full h-[70px] bg-white">
    <div class="flex justify-between w-[1200px] h-[70px] mx-auto my-0 bg-white">
      <!-- 左侧 -->
      <div @click="goHome" class="flex items-center">
        <img
          src="../../assets/images/logo.png"
          alt="logo"
          class="w-[50px] h-[50px] mr-3 cursor-pointer" />
        <h1 class="text-[20px] text-blue-400 cursor-pointer">尚医通 预约挂号统一平台</h1>
      </div>
      <!-- 右侧 -->
      <div class="flex items-center">
        <p class="ml-3 text-[15px] text-gray-500 cursor-pointer hover:text-blue-400">帮助中心</p>
        <p class="ml-3 text-[15px] text-gray-500 cursor-pointer hover:text-blue-400">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
