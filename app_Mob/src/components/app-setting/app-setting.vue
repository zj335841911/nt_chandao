<template>
  <ion-page :className="{ 'view-container': true,'app-setting': true}">
    <ion-header>
      <ion-toolbar class="ionoc-view-header">
        <ion-title class="view-title">
          <label class="title-label">设置</label>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="content">
      <ion-list class="content-list">
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">账号信息</div>
            <div class="content-list-item-content-text">{{srfloginname}}</div>
          </div>
        </ion-item>
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">手机号码</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">主题</div>
            <app-mob-select-changeTheme></app-mob-select-changeTheme>
          </div>
        </ion-item>
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">风格</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
      </ion-list>
      <ion-list class="content-list">
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">消息通知</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">隐私</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">通用</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">辅助功能</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
        <ion-item>
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">关于ibiz</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </ion-item>
      </ion-list>
      <ion-list class="content-list">
        <ion-item @click="logout">
          <div class="content-list-item-content">
            <div class="content-list-item-content-text">退出当前账号</div>
          </div>
        </ion-item>
        <ion-item @click="clear">
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

@Component({
  components: {},
})
export default class AppRoundList extends Vue {
    /**
     * 传入item
     * @type {any}
     * @memberof AppRoundList
     */
    //   @Prop() public item?:any;

    public items = [];

    public srfloginname = "";

    /**
     * created
     */
    public created() {
      let appdata =  this.$store.state.appdata;
      this.srfloginname = appdata.context.srfloginname;
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
            const get: Promise<any> = this.$http.get('v7/logout');
            get.then((response:any) =>{
                if (response && response.status === 200) {
                    // this.$appService.logout();
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
     * clear
     */
    public clear() {
      
    }

}
</script>
<style lang="less">
@import './app-setting.less';
</style>