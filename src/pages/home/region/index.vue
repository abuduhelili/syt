<script setup lang="ts"></script>

<template>
  <div class="mt-6 text-slate-500">
    <div class="flex">
      <div class="w-12 mr-2">地区：</div>
      <ul class="flex list-none flex-wrap flex-1">
        <li class="active cursor-pointer mb-4">全部</li>
        <!-- 循环实现多个区 -->
        <div v-for="item in 16" :key="item" class="cursor-pointer ml-5 mb-4 hover:text-blue-400">
          <li>东城区</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul li.active {
  color: #55a6fe;
}
</style>
