<template>
    <view class="page-auto">
        <view class="page-auto-header">
            <view class="page-auto-header-title">
                <text>{{title}}</text>
            </view>
            <view class="page-auto-header-back">
                <text class="page-auto-header-back-text" :click="onBack">返回</text>
            </view>
        </view>
        <view class="page-auto-content">
            <view class="page-auto-content-title">
                <text>{{contentTitle}}</text>
            </view>
            <view class="page-auto-content-text">
                <text>{{contentText}}</text>
            </view>
            <view class="page-auto-content-image">
                <image class="page-auto-content-image-img" src="{{contentImage}}"></image>
            </view>
        </view>
    </view>
</template>

<script>
export default {
  name: "auto",
  data() {
    return {
      title: "测试",
      contentTitle: "测试",
      contentText: "测试",
      contentImage: "https://img.yzcdn.cn/vant/cat.jpeg"
    };
  },
  methods: {
    onBack() {
      this.$emit("onBack");
    }
  }
}
</script>

<style scoped>

</style>
