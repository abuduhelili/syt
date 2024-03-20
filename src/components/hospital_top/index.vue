<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" alt="logo" />
        <h1>尚医通 预约挂号统一平台</h1>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;

  .content {
    width: 1200px;
    height: 70px;
    margin: 0 auto;
    background: #fff;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      h1 {
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      align-items: center;
      p {
        margin-left: 10px;
        font-size: 14px;
        color: #999;
        cursor: pointer;
        &:hover {
          color: #55a6fe;
        }
      }
    }
  }
}
</style>
