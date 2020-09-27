<template>
  <div class="app-mob-menu-sideslip-view-header">
    <div class="header">
      <img src="assets/images/logo.png" class="ibizLogo"/>
      <div class="title">iBizPMS</div>
      <div class="text">登录·试用测试版</div>
      <div class="notice"><ion-icon name="megaphone-outline"></ion-icon> #最新通知——更新/下载</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
@Component({
    components: {
    }
})
export default class AppMobMenuSideslipView extends Vue {

}
</script>

<style lang="less">
@import "./app-mob-menu-sideslip-view-header.less";
</style>