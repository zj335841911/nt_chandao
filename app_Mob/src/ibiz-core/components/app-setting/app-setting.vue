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
      <ion-list class="content-list content-list-top">
        <template v-for="item in data.top">
          <ion-item :key="item.name" v-if="item.isEnable" @click="onItemClick(item)">
            <div class="content-list-item-content">
              <div class="content-list-item-content-text">{{item.showtext}}</div>
              <ion-icon
                v-if="item.name !== 'theme' &&  item.name !== 'accountInformation'"
                name="chevron-forward-outline"
              ></ion-icon>
              <app-mob-select-theme v-if="item.name == 'theme'" ref="changeTheme"></app-mob-select-theme>
              <div
                v-if="item.name == 'accountInformation'"
                class="content-list-item-content-text"
              >{{srfloginname}}</div>
            </div>
          </ion-item>
        </template>
      </ion-list>
      <ion-list class="content-list content-list-center">
        <template v-for="item in data.center">
          <ion-item :key="item.name" v-if="item.isEnable" @click="onItemClick(item)">
            <div class="content-list-item-content">
              <div class="content-list-item-content-text">{{item.showtext}}</div>
              <ion-icon
                v-if="item.name !== 'theme' &&  item.name !== 'accountInformation'"
                name="chevron-forward-outline"
              ></ion-icon>
              <app-mob-select-theme v-if="item.name == 'theme'" ref="changeTheme"></app-mob-select-theme>
              <div
                v-if="item.name == 'accountInformation'"
                class="content-list-item-content-text"
              >{{srfloginname}}</div>
            </div>
          </ion-item>
        </template>
      </ion-list>
      <ion-list class="content-list content-list-bottom">
        <template v-for="item in data.bottom">
          <ion-item :key="item.name" v-if="item.isEnable" @click="onItemClick(item)">
            <div class="content-list-item-content">
              <div class="content-list-item-content-text">{{item.showtext}}</div>
              <ion-icon
                v-if="item.name !== 'theme' &&  item.name !== 'accountInformation'"
                name="chevron-forward-outline"
              ></ion-icon>
              <app-mob-select-theme v-if="item.name == 'theme'" ref="changeTheme"></app-mob-select-theme>
              <div
                v-if="item.name == 'accountInformation'"
                class="content-list-item-content-text"
              >{{srfloginname}}</div>
            </div>
          </ion-item>
        </template>
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
import { settingConfig } from "./config";
import i18n from '@/locale'
@Component({
  components: {},
})
export default class AppSetting extends Vue {

  /**
   * 用户名称
   */
  public srfloginname = "";

  /**
   * 第三方服务
   */
  public thirdPartyName = this.$viewTool.getThirdPartyName();

  /**
   * 生命周期
   */
  public created() {
    let appdata = this.$store.state.appdata;
    this.srfloginname = appdata && appdata.context && appdata.context.srfloginname?appdata.context.srfloginname:"" ;
    this.$viewTool.setViewTitleOfThirdParty("设置");
    this.setViewTitleStatus();
    this.initializeData();
  }

  /**
   * 视图数据
   */
  public data: any = {
    top: [],
    center: [],
    bottom: [],
  };

  /**
   * 初始化数据
   */
  public initializeData() {
    // console.log(settingConfig);
    let data = [];
    data.push(...settingConfig.default, ...settingConfig.userCustomize);
    // 分类合并
    data.forEach((item: any) => {
      if (item.position == "top") {
        this.data.top.push(item);
      }
      if (item.position == "center") {
        this.data.center.push(item);
      }
      if (item.position == "bottom") {
        this.data.bottom.push(item);
      }
      // 多语言处理
      if (item.entext) {
        if (i18n.locale == "ZH-CN") {
          item.showtext = item.text;
        } else if (i18n.locale == "EN-US"){
          item.showtext = item.entext;
        }
      }
    });
    // 排序规则
    let compare = (property: any) => {
      return (a: any, b: any) => {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    };
    // 排序
    Object.keys(this.data).forEach((item: any) => {
      this.data[item].sort(compare("sort"));
    });
  }

  /**
   * 标题状态
   *
   */
  public titleStatus: boolean = true;

  /**
   * 设置标题状态
   *
   */
  public setViewTitleStatus() {
    const thirdPartyName = this.$store.getters.getThirdPartyName();
    if (thirdPartyName) {
      this.titleStatus = false;
    }
  }

  /**
   * 退出登录
   */
  public async logout() {
    const title: any = this.$t("app.tabpage.sureclosetip.title");
    const contant: any = this.$t("app.tabpage.sureclosetip.content");
    const result = await this.$notice.confirm(title, "确认退出当前账号？");
    if (result) {
      if (this.thirdPartyName) {
        this.$viewTool.ThirdPartyClose();
        return;
      }
      const get: Promise<any> = this.$http.get("v7/logout");
      get.then((response: any) => {
          if (response && response.status === 200) {
            this.doLogin();
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }

  /**
   * 去登录
   *
   */
  public doLogin(data?: any): void {
    // 清除user、token
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    this.$router.push({ name: "login" });
  }

  /**
   * 清除缓存
   */
  public async clear() {
    const result = await this.$notice.confirm("清除缓存", "清除缓存可能会导致当前登录信息失效！！！");
    if (result) {
      localStorage.clear();
    }
  }

  /**
   * 主题切换
   */
  public changeTheme() {
    let changeTheme: any = this.$refs.changeTheme;
    if (changeTheme && changeTheme[0]) {
      changeTheme[0].open();
    }
  }

  /**
   * 个人中心
   */
  public userCenter() {
    const { context, param } = this.$store.getters.getAppData();
    let user: any = {};
    if (context && context.srfuserid) {
      user[settingConfig.userEntityName] = context.srfuserid;
    }
    if (settingConfig.userCenterViewName) {
      this.$appmodal.openModal(
        { viewname: settingConfig.userCenterViewName, title: "" },
        user
      );
    } else {
      this.$notice.warning("用户自定义视图未配置");
    }
  }

  /**
   * 模态打开
   *
   */
  private async openPopupModal(view: any, context: any, param: any): Promise<any> {
    const result: any = await this.$appmodal.openModal(view, context, param);
    if (result || Object.is(result.ret, "OK")) {
      this.$emit("change", result.datas[0].backEnd);
    }
  }

  /**
   * 语言列表
   *
   */
  public lanArray:any;

  /**
   * 切换语言
   *
   */
  public changeLanguage(){
    let lanarr:any = localStorage.getItem('lanArray');
    this.lanArray = JSON.parse(lanarr); 
    this.lanArray = this.lanArray.map( (language:any) => language.indexOf("ZH-CN") > -1 ? language.replace("ZH-CN","EN-US") : language.replace("EN-US","ZH-CN"));
    i18n.locale = this.lanArray[0];
    localStorage.setItem('local',this.lanArray[0]);
    localStorage.setItem('lanArray',JSON.stringify(this.lanArray)) ;
    // 提示框
    if (this.lanArray[0] === "ZH-CN") {
      this.$notice.success('已切换为中文！');
    } else if (this.lanArray[0] === "EN-US"){
      this.$notice.success('已切换为英文！');
    }
    Object.keys(this.data).forEach((items: any) => {
      // 多语言处理
      this.data[items].forEach((item:any)=>{
        if (item.entext) {
          if (i18n.locale == "ZH-CN") {
            item.showtext = item.text;
          } else if (i18n.locale == "EN-US"){
            item.showtext = item.entext;
          }
        }
      })
    });
    this.$forceUpdate();
  }

  /**
   * item点击事件
   */
  public onItemClick(item: any) {
    // 内置功能
    if (item.name == "accountInformation") {
      this.userCenter();
    } else if (item.name == "theme") {
      this.changeTheme();
    } else if (item.name == "layoutStyle") {
      this.openPopupModal({ viewname: item.viewName }, {}, {});
    } else if (item.name == "logout") {
      this.logout();
    } else if (item.name == "clear") {
      this.clear();
    } else if (item.name == "language"){
      this.changeLanguage();
    } else {
      // 自定义功能
      if (item.viewName) {
        this.openPopupModal({ viewname: item.viewName }, {}, {});
      }
    }
  }
}
</script>
<style lang="less">
@import "./app-setting.less";
</style>