<template>
  <div class="app-mob-menu-sideslip-view-header">
    <div class="header">
      <img src="assets/images/logo.png" class="ibizLogo"/>
      <div class="title">账号信息：{{srfloginname}}</div>
      <div class="text">{{text}}</div>
      <div class="notice" @click="toNotice"><ion-icon name="megaphone-outline"></ion-icon> #论坛地址——{{notice}}</div>
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

  /**
    * 账号信息
    *
    * @type {*}
    * @memberof AppMobMenuSideslipViewHeader
    */
  public srfloginname?:any;

  /**
    * 软件信息
    *
    * @type {string}
    * @memberof AppMobMenuSideslipViewHeader
    */
  public text?:string;

  /**
    * 论坛信息
    *
    * @type {string}
    * @memberof AppMobMenuSideslipViewHeader
    */
  public notice?:string;

  /**
    * 生命周期
    *
    * @memberof AppMobMenuSideslipViewHeader
    */
  public created(){
    this.text = Environment.AppTitle;
    this.notice = Environment.ibizbbstUrl;
    let appdata = this.$store.state.appdata;
    this.srfloginname = appdata.context.srfloginname;
  }

  /**
    * 跳转论坛
    *
    * @memberof AppMobMenuSideslipViewHeader
    */
  public toNotice(){
    // window.location.href = 'https://bbs.ibizlab.cn';
    window.open('https://bbs.ibizlab.cn','_blank');
  }
}
</script>

<style lang="less">
@import "./app-mob-menu-sideslip-view-header.less";
</style>