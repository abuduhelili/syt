<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {reqHospitalLevelAndRegion} from '@/api/home';
import type {HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData,} from '@/api/home/type.ts';

// 获取等级
const levelArr = ref<HospitalLevelAndRegionArr>([]);
const getLevel = async () => {
  const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
  if (result.code === 200) {
    levelArr.value = result.data;
  }
};
onMounted(() => {
  getLevel();
});

// 控制高亮
const activeFlag = ref<string>('');
// 向父组件传值
const emit = defineEmits(['getLevel']);
const changeActive = (value: string) => {
  activeFlag.value = value;
  emit('getLevel', value);
};
</script>

<template>
  <div class="mt-[20px] text-slate-500">
    <h1>医院</h1>
    <div class="flex mt-5">
      <div class="mr-2 w-12">等级：</div>
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
              v-for="level in levelArr"
              :key="level.value"
              @click="changeActive(level.value)"
              :class="{ active: activeFlag === level.value }"
              class="cursor-pointer mr-8 mb-4 hover:text-blue-400">
            {{ level.name }}
          </li>
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
