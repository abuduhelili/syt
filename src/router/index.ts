import { createRouter, createWebHistory } from 'vue-router';

// 路由配置
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/Home.vue'),
  },
  {
    path: '/hospital',
    name: 'Hospital',
    component: () => import('@/pages/hospital/Hospital.vue'),
    children: [
      {
        path: 'booking',
        component: () => import('@/pages/hospital/HospitalBooking.vue'),
      },
      {
        path: 'detail',
        component: () => import('@/pages/hospital/HospitalDetail.vue'),
      },
      {
        path: 'notice',
        component: () => import('@/pages/hospital/HospitalNotice.vue'),
      },
      {
        path: 'information',
        component: () => import('@/pages/hospital/HospitalInformation.vue'),
      },
      {
        path: 'cancel',
        component: () => import('@/pages/hospital/HospitalCancel.vue'),
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
  // 滚动行为
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
