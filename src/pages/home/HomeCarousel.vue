<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-full h-[350px]" src="../../assets/images/web-banner-1.png" alt=""/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
