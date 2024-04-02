<script setup lang="ts">
import { useHospitalDetail } from '@/store/modules/hospitalDetail';

const hospitalDetail = useHospitalDetail();
</script>

<template>
  <div>
    <p>{{ hospitalDetail.hospitalDate?.hospital }}</p>
  </div>
</template>

<style scoped></style>
