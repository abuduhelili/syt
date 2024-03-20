<script setup lang="ts"></script>

<template>
  <div class="mt-[20px] text-slate-500">
    <h1>医院</h1>
    <div class="flex mt-[15px]">
      <div class="mr-2 w-12">等级：</div>
      <ul class="flex list-none flex-wrap flex-auto">
        <li class="active cursor-pointer mb-4">全部</li>
        <div v-for="item in 5" :key="item" class="cursor-pointer ml-5 mb-4 hover:text-blue-400">
          <li>三级甲等</li>
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
