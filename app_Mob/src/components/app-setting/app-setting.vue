<template>
  <ion-page :className="{ 'view-container': true,'app-setting': true}">
    <ion-header v-if="titleStatus">
      <ion-toolbar class="ionoc-view-header">
        <ion-title class="view-title">
          <label class="title-label">设置</label>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="content">
      <ion-list class="content-list">
        <ion-item v-if="settingConfig.accountInformation" @click="userCenter">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">账号信息</div>
            <div class="content-list-item-content-text">{{srfloginname}}</div>
          </div>
        </ion-item>
        <ion-item v-if="settingConfig.mobilePhoneNumber">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">手机号码</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item @click="changeTheme" v-if="settingConfig.theme">
          <div class="content-list-item-content">
            <ion-label class="content-list-item-content-text">主题</ion-label>
            <app-mob-select-changeTheme ref="changeTheme"></app-mob-select-changeTheme>
          </div>
        </ion-item>
        <ion-item v-if="settingConfig.layoutStyle" @click="openModal">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">风格</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
      </ion-list>
      <ion-list class="content-list">
        <ion-item v-if="settingConfig.notification">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">消息通知</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item v-if="settingConfig.privacy">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">隐私</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item v-if="settingConfig.Universal">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">通用</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item v-if="settingConfig.accessibility">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">辅助功能</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item v-if="settingConfig.about">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">关于ibiz</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
      </ion-list>
      <ion-list class="content-list" >
        <ion-item @click="logout" v-if="settingConfig.logout">
          <div class="content-list-item-content">
            <div v-if="!thirdPartyName" class="content-list-item-content-text">退出当前账号</div>
            <div v-if="thirdPartyName" class="content-list-item-content-text">退出应用</div>
          </div>
        </ion-item>
        <ion-item @click="clear" v-if="settingConfig.clear">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">清除缓存</div>
          </div>
        </ion-item>
      </ion-list>
    </div>
  </ion-page>
</template>
<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Provide,
  Emit,
  Watch,
} from "vue-property-decorator";
import { settingConfig } from './app-setting'
@Component({
  components: {},
})
export default class AppSetting extends Vue {

    public settingConfig = settingConfig;

    public srfloginname = "";

    public thirdPartyName = this.$viewTool.getThirdPartyName();

    /**
     * 生命周期
     */
    public created() {
      let appdata =  this.$store.state.appdata;
      this.srfloginname = appdata.context.srfloginname;
      this.$viewTool.setViewTitleOfThirdParty("设置");
      this.setViewTitleStatus();
    }

    /**
     * 标题状态
     *
     * @memberof ProductCloseMobEditViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 设置标题状态
     *
     * @memberof ProductCloseMobEditViewBase
     */
    public setViewTitleStatus(){
        const thirdPartyName = this.$store.getters.getThirdPartyName();
        if(thirdPartyName){
            this.titleStatus = false;
        }
    }

    /**
     * 退出登录
     *
     * @memberof 
     */
    public async logout() {
        const title: any = this.$t('app.tabpage.sureclosetip.title');
        const contant: any = this.$t('app.tabpage.sureclosetip.content');
        const result = await this.$notice.confirm(title, '确认退出当前账号？',this.$store);
        if(result){
            if(this.thirdPartyName){
              this.$viewTool.ThirdPartyClose();
              return
            }
            const get: Promise<any> = this.$http.get('v7/logout');
            get.then((response:any) =>{
                if (response && response.status === 200) {
                    this.doLogin();
                }
            }).catch((error: any) =>{
                console.error(error);
            })
        }
    }

    /**
     * 去登录
     *
     * @param {*} [data]
     * @memberof AppServiceBase
     */
    public doLogin(data?: any): void {
        // 清除user、token
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
        this.$router.push({ name: 'login' });
    }

    /**
     * 清除缓存
     */
    public async clear() {
        const result = await this.$notice.confirm("清除缓存", '清除缓存可能会导致当前登录信息失效！！！',this.$store);
        if(result){
            localStorage.clear();
        }
    }
    
    /**
     * 主题切换
     */
    public changeTheme() {
      let changeTheme:any = this.$refs.changeTheme;
      if(changeTheme){
        changeTheme.open();
      }
    }

    /**
     * 个人中心
     */
    public userCenter(){
      const { context, param } = this.$store.getters.getAppData();
      let user :any = {}
      if(context && context.srfuserid){
        user[this.settingConfig.userEntityName] = context.srfuserid;
      }
      if(this.settingConfig.userCenterViewName){
        this.$appmodal.openModal({viewname:this.settingConfig.userCenterViewName,title:""},user);
      }else{
        this.$notice.warning("用户自定义视图未配置")
      }
    }

    /**
     * 打开模态框
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    public openModal(){
      this.openPopupModal({ viewname: 'app-mob-select-changeStyle', title: 'app-mob-select-changeStyle'},{},{});
    }

    /**
     * 模态打开
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    private async openPopupModal(view: any, context: any, param: any): Promise<any> {
        const result: any = await this.$appmodal.openModal(view, context, param);
        if (result || Object.is(result.ret, 'OK')) {
            this.$emit("change", result.datas[0].backEnd);
        }
    }

}
</script>
<style lang="less">
@import './app-setting.less';
</style>