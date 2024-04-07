<script lang="ts" setup>
import HospitalTop from '@/components/HospitalTop.vue'
import HospitalBottom from '@/components/HospitalBottom.vue'
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- 顶部全局组件 -->
    <HospitalTop/>
    <!-- 路由组件 -->

    <div class="mt-[70px] w-[1200px] min-h-[700px]">
      <router-view/>
    </div>
    <!-- 底部全局组件 -->
    <HospitalBottom/>
  </div>
</template>

<style scoped></style>

<!--
  主题色：
  #55a6fe
  #7f7f7f

  # 一、接口

      服务器地址:http://syt.atguigu.cn
      医院接口：http://139.198.34.216:8201/swagger-ui.html
      公共数据接口：http://139.198.34.216:8202/swagger-ui.html
      会员接口：http://139.198.34.216:8203/swagger-ui.html
      短信验证码接口：http://139.198.34.216:8204/swagger-ui.html
      订单接口：http://139.198.34.216:8206/swagger-ui.html
      文件上传接口：http://139.198.34.216:8205/swagger-ui.html
      后台用户接口：http://139.198.34.216:8212/swagger-ui.html
  -->
