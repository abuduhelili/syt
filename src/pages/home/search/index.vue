<template>
  <div class="w-full h-[100px] flex items-center justify-center">
    <el-autocomplete class="w-[350px]" clearable placeholder="请输入医院名称" />
    <el-button type="primary" size="default" :icon="Search" class="ml-3"></el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
</script>

<style scoped>
/* .search {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  :deep(.el-input__wrapper) {
    width: 350px;
  }

  .el-button {
    margin-left: 5px;
  }
} */
</style>
