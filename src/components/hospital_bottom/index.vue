<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        <a href="#">京ICP备13027525号</a>
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

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background: #f0f2f5;

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #555;

    .left {
      a {
        color: inherit;
        margin-right: 8px;
        text-decoration: none;
        &:hover {
          color: #55a6fe;
        }
      }
    }

    .right {
      span {
        margin-left: 8px;
        cursor: pointer;
        &:hover {
          color: #55a6fe;
        }
      }
    }
  }
}
</style>
