<script setup lang="ts">
// 接受父组件传过来的数据 hospitalInfo
defineProps(['hospitalInfo']);
</script>

<template>
  <el-card shadow="hover">
    <div class="flex justify-between">
      <div class="w-[70%] flex flex-col justify-center">
        <h1 class="text-xl font-normal">{{ hospitalInfo.hosname }}</h1>
        <div class="flex justify-between mt-5 text-slate-500">
          <div class="flex items-center">
            <svg
              t="1710785695449"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4292"
              width="16"
              height="16">
              <path
                d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z"
                fill="#000000"
                p-id="4293"></path>
            </svg>
            <span class="ml-1.5">{{ hospitalInfo.param.hostypeString }}</span>
          </div>
          <div class="flex items-center">
            <svg
              t="1710785772266"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5517"
              width="16"
              height="16">
              <path
                d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-960C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z"
                fill="#666666"
                p-id="5518"></path>
              <path
                d="M512 304c9.6 0 16 6.4 16 16v256c0 9.6-6.4 16-16 16s-16-6.4-16-16v-256c0-9.6 6.4-16 16-16z"
                fill="#D8D8D8"
                p-id="5519"></path>
              <path
                d="M512 608c-19.2 0-32-12.8-32-32v-256c0-19.2 12.8-32 32-32s32 12.8 32 32v256c0 19.2-12.8 32-32 32z m0-304v16-16z"
                fill="#666666"
                p-id="5520"></path>
              <path
                d="M646.4 662.4c-3.2 6.4-12.8 9.6-22.4 6.4l-108.8-67.2c-6.4-3.2-9.6-12.8-6.4-22.4 3.2-6.4 12.8-9.6 22.4-6.4L640 640c9.6 3.2 12.8 16 6.4 22.4z"
                fill="#D8D8D8"
                p-id="5521"></path>
              <path
                d="M633.6 684.8c-6.4 0-12.8 0-16-3.2l-108.8-67.2c-16-9.6-19.2-28.8-9.6-44.8 9.6-16 28.8-19.2 44.8-9.6l108.8 67.2c16 9.6 19.2 28.8 9.6 44.8-6.4 9.6-19.2 12.8-28.8 12.8z m-108.8-96l124.8 73.6-12.8-9.6-112-64z"
                fill="#666666"
                p-id="5522"></path>
            </svg>
            <span class="ml-1.5">每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
          </div>
        </div>
      </div>

      <div class="w-[25%] flex justify-center items-center">
        <img
          class="w-[70px] h-[70px]"
          :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`"
          alt="" />
      </div>
    </div>
  </el-card>
</template>

<style scoped>
/* .card {
  display: flex;
  justify-content: space-between;
  .left {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 20px;
      font-weight: 400;
    }

    .info {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      color: #7f7f7f;

      .level {
        display: flex;
        align-items: center;

        span {
          margin-left: 5px;
        }
      }

      .time {
        display: flex;
        align-items: center;

        span {
          margin-left: 5px;
        }
      }
    }
  }

  .logo {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
} */
</style>
