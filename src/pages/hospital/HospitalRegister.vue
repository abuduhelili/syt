<script lang="ts" setup>
import { useHospitalDetail } from '@/store/hospitalDetail.ts';

const hospitalDetail = useHospitalDetail();
</script>

<template>
  <div>
    <!-- top -->
    <div class="my-4 flex items-center">
      <h1 class="text-xl font-bold mr-6">{{ hospitalDetail.hospitalDate?.hospital.hosname }}</h1>
      <svg
        class="icon"
        height="16"
        p-id="5245"
        t="1712144893087"
        version="1.1"
        viewBox="0 0 1024 1024"
        width="16"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M257.13777778 257.13777778H111.50222222c-20.09770667 0-36.40888889 16.31118222-36.40888889 36.40888889v618.95111111c0 20.13411555 16.31118222 36.40888889 36.40888889 36.40888889h145.63555556c20.09770667 0 36.40888889-16.27477333 36.40888889-36.40888889V293.54666667c0-20.09770667-16.31118222-36.40888889-36.40888889-36.40888889zM584.81777778 475.59111111H439.18222222c-20.09770667 0-36.40888889 16.31118222-36.40888889 36.40888889v400.49777778c0 20.13411555 16.31118222 36.40888889 36.40888889 36.40888889h145.63555556c20.13411555 0 36.40888889-16.27477333 36.40888889-36.40888889V512c0-20.09770667-16.27477333-36.40888889-36.40888889-36.40888889zM912.49777778 75.09333333H766.86222222c-20.13411555 0-36.40888889 16.31118222-36.40888889 36.40888889v800.99555556c0 20.13411555 16.27477333 36.40888889 36.40888889 36.40888889h145.63555556c20.13411555 0 36.40888889-16.27477333 36.40888889-36.40888889V111.50222222c0-20.09770667-16.27477333-36.40888889-36.40888889-36.40888889z"
          fill="#707070"
          p-id="5246"></path>
      </svg>
      <span class="text-gray-500">
        {{ hospitalDetail.hospitalDate?.hospital.param.hostypeString }}
      </span>
    </div>
    <!-- 内容 -->
    <div class="flex mt-10">
      <!-- 图标 -->
      <div>
        <img
          :src="`data:image/jpeg;base64,` + hospitalDetail.hospitalDate?.hospital.logoData"
          alt=""
          class="w-24 h-24 rounded-full" />
      </div>
      <!-- 内容 -->
      <div class="ml-10 flex-1 text-[15px]">
        <!-- 挂号规则 -->
        <div>
          <div class="text-base text-black">挂号规则</div>
          <ol class="flex w-2/3 mt-1 justify-between text-gray-500">
            <li>预约周期：{{ hospitalDetail.hospitalDate?.bookingRule.cycle }}</li>
            <li>放号时间：{{ hospitalDetail.hospitalDate?.bookingRule.releaseTime }}</li>
            <li>停挂时间：{{ hospitalDetail.hospitalDate?.bookingRule.stopTime }}</li>
          </ol>
          <div v-if="hospitalDetail.hospitalDate?.bookingRule.quitDay" class="text-gray-500 mt-1">
            退号时间：就诊前
            {{ Math.abs(hospitalDetail.hospitalDate?.bookingRule.quitDay) }}个工作日，
            {{ hospitalDetail.hospitalDate?.bookingRule.quitTime }}前取消
          </div>
        </div>
        <!-- 预约规则 -->
        <div>
          <div class="text-base text-black mt-2">预约规则</div>
          <li
            v-for="(item, index) in hospitalDetail.hospitalDate?.bookingRule.rule"
            :key="index"
            class="list-none mt-1 text-gray-500">
            <span class="mr-1">{{ index + 1 }}</span>
            {{ item }}
          </li>
        </div>
      </div>
    </div>
    <!-- 医院科室内容 -->
  </div>
</template>

<style scoped></style>
