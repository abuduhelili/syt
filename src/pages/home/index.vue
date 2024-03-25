<script setup lang="ts">
import { onMounted, ref } from 'vue';
// 引入组件
import Carousel from './HomeCarousel.vue';
import Search from './HomeSearch.vue';
import Level from './HomeLevel.vue';
import Region from './HomeRegion.vue';
import Card from './HomeCard.vue';
import SideBar from './HomeSideBar.vue';

import { getHospital } from '@/api/home';
import type { HospitalList, HospitalResponseData } from '@/api/home/type';

// 分页数据
const pageNo = ref<number>(1);
const pageSize = ref<number>(10);
const hospitalArr = ref<HospitalList>([]);
const total = ref<number>(0);

const hostype = ref<string>('');
const districtCode = ref<string>('');

// 页面加载时获取医院数据
onMounted(() => {
  getHospitalInfo();
});
// 获取医院数据
const getHospitalInfo = async () => {
  const res: HospitalResponseData = await getHospital(
    pageNo.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );
  if (res.code === 200) {
    hospitalArr.value = res.data.content;
    total.value = res.data.totalElements;
  } else {
    console.log('获取医院数据失败');
  }
};
// 当前页码改变
const currentChange = (val: number) => {
  pageNo.value = val;
  getHospitalInfo();
};
// 每页条数改变
const sizeChange = (val: number) => {
  pageSize.value = val;
  getHospitalInfo();
};
// 接受子组件传递的等级
const getLevel = (level: string) => {
  hostype.value = level;
  // 重新获取医院数据
  getHospitalInfo();
  // console.log(level);
};
// 接受子组件传递的地区
const getRegion = (region: string) => {
  districtCode.value = region;
  // 重新获取医院数据
  getHospitalInfo();
  // console.log(region);
};
</script>

<template>
  <div class="home">
    <!-- 首页-轮播图 -->
    <Carousel />
    <!-- 首页-搜索 -->
    <Search />
    <!-- 首页-内容 -->
    <el-row :gutter="20">
      <!-- 内容-左侧 -->
      <el-col :span="20">
        <!-- 等级-选项 -->
        <Level @getLevel="getLevel" />
        <!-- 地区-选项 -->
        <Region @getRegion="getRegion" />
        <!-- 医院卡片 -->
        <div class="my-[20px] flex justify-between flex-wrap">
          <Card
            v-if="hospitalArr.length > 0"
            v-for="item in hospitalArr"
            :key="item.id"
            :hospitalInfo="item"
            class="w-[48%] mb-[30px]" />
          <el-empty v-else description="暂无数据" class="w-[100%]" />
        </div>
        <!-- 底部-分页 -->
        <div class="mb-[20px]">
          <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :small="false"
            :background="true"
            layout="prev, pager, next, jumper,total,->,sizes"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange" />
        </div>
      </el-col>
      <!-- 内容-右侧 -->
      <el-col :span="4">
        <SideBar />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
/* .home {
  .hospital {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
      width: 48%;
      margin-bottom: 30px;
    }
  }
  .pagination {
    margin: 20px 0;
  }
} */
</style>
