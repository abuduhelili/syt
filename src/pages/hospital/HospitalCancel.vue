<script setup lang="ts">
import { useHospitalDetail } from '@/store/hospitalDetail';
const hospitalDetail = useHospitalDetail();
</script>

<template>
  <div>
    <h1 class="text-xl font-bold text-center">
      {{ hospitalDetail.hospitalDate?.hospital.hosname }}取消
    </h1>
    <!-- 空白状态 -->
    <el-empty :image-size="200" description="暂无数据" class="mt-10" />
  </div>
</template>

<style scoped></style>
