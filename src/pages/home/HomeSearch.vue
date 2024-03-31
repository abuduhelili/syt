<script lang="ts" setup>
import { reqHospitalInfoSearch } from '@/api/home';
import type { HospitalInfoSearch } from '@/api/home/type.ts';
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// 保存医院名字
const hosname = ref<string>('');
// 搜索
const querySearch = async (keyword: string, cb: any) => {
  const result: HospitalInfoSearch = await reqHospitalInfoSearch(keyword);
  // 更改键值:hosname > value
  const list = result.data.map((item: any) => {
    return {
      value: item.hosname,
      hoscode: item.hoscode,
    };
  });
  console.log(list);
  // 回调
  cb(list);
};
// 点击跳转
const goDetail = (item: any) => {
  router.push({
    path: '/hospital/register',
    query: { hoscode: item.hoscode },
  });
};
</script>

<template>
  <div class="w-full h-[100px] flex items-center justify-center">
    <el-autocomplete
      v-model="hosname"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      @select="goDetail"
      class="w-[400px]"
      clearable
      placeholder="请输入医院名称" />
    <el-button :icon="Search" class="ml-3" size="default" type="primary"></el-button>
  </div>
</template>

<style scoped></style>
