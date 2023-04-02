<template>
  <view class="container">
    <image class="logo" mode="aspectFit" src="/static/logo.png" />
    <view class="text-area">
      <text class="message">{{ message }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const message = ref('Ciallo～(∠·ω< )⌒★');
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 80vw;
  }

  .text-area {
    display: flex;
    justify-content: center;

    .message {
      font-size: 36rpx;
      color: #8f8f94;
    }
  }
}
</style>
