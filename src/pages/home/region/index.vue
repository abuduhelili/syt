<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqHospitalLevelAndRegion } from '@/api/home/index';
import type {
  HospitalLevelAndRegionArr,
  HospitalLevelAndRegionResponseData,
} from '@/api/home/type';

// 获取地区
const regionArr = ref<HospitalLevelAndRegionArr>([]);
const getLevel = async () => {
  const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin');
  if (result.code === 200) {
    regionArr.value = result.data;
  }
};
onMounted(() => {
  getLevel();
});

// 控制高亮
const activeFlag = ref<string>('');
const changeActive = (value: string) => {
  activeFlag.value = value;
};
</script>

<template>
  <div class="mt-4 text-slate-500">
    <div class="flex">
      <div class="w-12 mr-2">地区：</div>
      <ul class="flex list-none flex-wrap flex-1">
        <li
          :class="{ active: activeFlag === '' }"
          @click="changeActive('')"
          class="cursor-pointer mr-4">
          全部
        </li>
        <!-- 循环实现多个区 -->
        <div class="flex list-none flex-wrap flex-1">
          <li
            v-for="region in regionArr"
            :key="region.value"
            :class="{ active: activeFlag === region.value }"
            @click="changeActive(region.value)"
            class="cursor-pointer mr-8 mb-4 hover:text-blue-400">
            {{ region.name }}
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul .active {
  color: #55a6fe;
}
</style>
