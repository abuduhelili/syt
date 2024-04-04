<template>
  <div class="w-full h-[50px] bg-white">
    <div
      class="w-[1200px] h-full my-o mx-auto flex justify-between items-center text-[14px] text-gray-400">
      <div>
        <a href="#" class="text-inherit mr-2 hover:text-blue-400">京ICP备13027525号</a>
        <span>京卫网审字(2001)27号</span>
      </div>
      <div class="right">
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>联系我们</span>
        <span>关于我们</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.right span {
  @apply ml-2 cursor-pointer hover:text-blue-400;
}
</style>
