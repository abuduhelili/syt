<script lang="ts" setup>
import { Bell, Close, Menu, Message, Operation } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

// 当前路由
const route = useRoute();
console.log(route.path);
</script>

<template>
  <el-row :gutter="20">
    <!-- 左侧-导航 -->
    <el-col :span="4">
      <el-menu :router="true" :default-active="route.path">
        <el-menu-item index="/hospital/register">
          <el-icon><Menu /></el-icon><span>预约挂号</span>
        </el-menu-item>

        <el-menu-item index="/hospital/detail">
          <el-icon><Operation /></el-icon><span>医院详情</span>
        </el-menu-item>

        <el-menu-item index="/hospital/notice">
          <el-icon> <Bell /></el-icon><span>预约通知</span>
        </el-menu-item>

        <el-menu-item index="/hospital/information">
          <el-icon><Message /></el-icon><span>停诊信息</span>
        </el-menu-item>

        <el-menu-item index="/hospital/cancel">
          <el-icon><Close /> </el-icon><span>取消</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <!-- 右侧-路由展示 -->
    <el-col :span="20">
      <router-view />
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped></style>
