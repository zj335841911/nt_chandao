import { Vue } from 'vue-property-decorator';
import { FooterItemsService } from '@/studio-core/service/FooterItemsService';
import AppMenusModel from '@/widgets/app/zentao-appmenu/zentao-appmenu-model';

/**
 * 应用首页基类
 */
export class IBizPMSBase extends Vue {
  /**
   * 计数器服务对象集合
   *
   * @type {any[]}
   * @memberof IBizPMSBase
   */
  protected counterServiceArray: any[] = [];

  /**
   * 应用菜单集合
   *
   * @type {AppMenusModel}
   * @memberof IBizPMSBase
   */
  protected appMenuModel: AppMenusModel = new AppMenusModel();

  /**
   * 左侧导航菜单
   *
   * @type {*}
   * @memberof IBizPMSBase
   */
  protected left_exp: any = this.appMenuModel.getMenuGroup('left_exp') || {};

  /**
   * 底部导航菜单
   *
   * @type {*}
   * @memberof IBizPMSBase
   */
  protected bottom_exp: any = this.appMenuModel.getMenuGroup('bottom_exp') || {};
 
  /**
   * 标题栏菜单
   *
   * @type {*}
   * @memberof IBizPMSBase
   */
  protected top_menus: any = this.appMenuModel.getMenuGroup('top_menus') || {};
 
  /**
   * 用户菜单
   *
   * @type {*}
   * @memberof IBizPMSBase
   */
  protected user_menus: any = this.appMenuModel.getMenuGroup('user_menus') || {};

  /**
   * 底部项绘制服务
   *
   * @type {FooterItemsService}
   * @memberof IBizPMSBase
   */
  protected footerItemsService: FooterItemsService = new FooterItemsService();

  /**
   * 视图标识
   *
   * @type {string}
   * @memberof IBizPMSBase
   */
  protected viewtag: string = '1ed8a475f4c185fc99c487900bbcf69e';

  /**
   * 视图模型数据
   *
   * @type {*}
   * @memberof IBizPMSBase
   */
  protected model: any = {
      srfCaption: 'app.views.ibizpms.caption',
      srfTitle: 'app.views.ibizpms.title',
      srfSubTitle: 'app.views.ibizpms.subtitle',
      dataInfo: ''
  }

  /**
   * 应用上下文
   *
   * @type {*}
   * @memberof IBizPMSBase
   */
  protected context: any = {};

  /**
   * 视图参数
   *
   * @type {*}
   * @memberof IBizPMSBase
   */
  protected viewparams: any = {};

  /**
   * 注册底部项
   *
   * @memberof IBizPMSBase
   */
  protected registerFooterItems(): void {
    const leftItems: any = this.appMenuModel.getMenuGroup('footer_left');
    const centerItems: any = this.appMenuModel.getMenuGroup('footer_center');
    const rightItems: any = this.appMenuModel.getMenuGroup('footer_right');
    if (leftItems && leftItems.items) {
      leftItems.items.forEach((item: any) => {
        this.footerItemsService.registerLeftItem((h: any) => {
          return <div class='action-item' title={item.tooltip} on-click={() => this.click(item)}>
            <menu-icon item={item}/>
            {item.text}
          </div>;
        });
      });
    }
    if (centerItems && centerItems.items) {
      centerItems.items.forEach((item: any) => {
        this.footerItemsService.registerCenterItem((h: any) => {
          return <div class='action-item' title={item.tooltip} on-click={() => this.click(item)}>
            <menu-icon item={item}/>
            {item.text}
          </div>;
        });
      });
    }
    if (rightItems && rightItems.items) {
      rightItems.items.forEach((item: any) => {
        this.footerItemsService.registerRightItem((h: any) => {
          return <div class='action-item' title={item.tooltip} on-click={() => this.click(item)}>
            <menu-icon item={item}/>
            {item.text}
          </div>;
        });
      });
    }
  }

  /**
   * 项点击触发界面行为
   *
   * @protected
   * @param {*} item
   * @memberof IBizPMSBase
   */
  protected click(item: any): void {
    const appMenu: any = this.$refs.appmenu;
    if (appMenu) {
      appMenu.click(item);
    }
  }

  /**
   * 组件创建完毕
   *
   * @memberof IBizPMSBase
   */
  protected created() {
    const secondtag = this.$util.createUUID();
    this.$store.commit("viewaction/createdView", {
      viewtag: this.viewtag,
      secondtag: secondtag
    });
    this.viewtag = secondtag;
    this.parseViewParam();
    this.$uiState.changeLayoutState({
      styleMode: 'DEFAULT'
    });
    this.registerFooterItems();
  }

  /**
   * 销毁之前
   *
   * @memberof IBizPMSBase
   */
  protected beforeDestroy() {
    this.$store.commit("viewaction/removeView", this.viewtag);
  }

  /**
   * Vue声明周期(组件初始化完毕)
   *
   * @memberof IBizPMSBase
   */
  protected mounted() {
    this.$viewTool.setIndexParameters([
      { pathName: 'ibizpms', parameterName: 'ibizpms' }
    ]);
    this.$viewTool.setIndexViewParam(this.context);
    setTimeout(() => {
      const el = document.getElementById('app-loading-x');
      if (el) {
        el.remove();
      }
    }, 300);
  }

  /**
   * 解析视图参数
   *
   * @private
   * @memberof IBizPMSBase
   */
  private parseViewParam(): void {
    const path = this.$route.matched[this.$route.matched.length - 1].path;
    const keys: Array<any> = [];
    const curReg = this.$pathToRegExp.pathToRegexp(path, keys);
    const matchArray = curReg.exec(this.$route.path);
    let tempValue: Object = {};
    keys.forEach((item: any, index: number) => {
      Object.defineProperty(tempValue, item.name, {
        enumerable: true,
        value: matchArray[index + 1]
      });
    });
    this.$viewTool.formatRouteParams(
      tempValue,
      this.$route,
      this.context,
      this.viewparams
    );
    if (
      this.$store.getters.getAppData() &&
      this.$store.getters.getAppData().context
    ) {
      Object.assign(this.context, this.$store.getters.getAppData().context);
    }
  }

  /**
   * 绘制内容
   */
  public render(): any {
    const styleMode = this.$uiState.layoutState.styleMode;
    let leftContent: any;
    switch (styleMode) {
      case 'DEFAULT':
        leftContent = <app-content-left-exp menus={this.left_exp.items} />;
        break;
      case 'STYLE2':
        leftContent = <app-content-left-nav-menu menus={this.left_exp.items} on-menu-click={(item: any) => this.click(item)}/>;
    }
    return (
      <app-layout>
        <template slot="header">
          <app-header>
            <template slot="header_left">
              <div class="title">
                iBiz软件生产管理
              </div>
            </template>
            <template slot="header_right">
              <app-header-menus menus={this.top_menus.items} on-menu-click={(item: any) => this.click(item)}/>
              <user-info menus={this.user_menus.items} on-menu-click={(item: any) => this.click(item)}/>
            </template>
          </app-header>
          <view_appmenu ref='appmenu'/>
        </template>
        <app-content>
          {this.left_exp.items ? <template slot="content_left">
            {leftContent}
          </template> : null}
          {styleMode === 'DEFAULT' ? <tab-page-exp></tab-page-exp> : null}
          <div class="view-warp">
            <app-keep-alive routerList={this.$store.state.historyPathList}>
              <router-view key={this.$route.fullPath}></router-view>
            </app-keep-alive>
          </div>
          {this.bottom_exp.items ? <template slot="content_bottom">
            <app-content-bottom-exp menus={this.bottom_exp.items} />
          </template> : null}
        </app-content>
        <template slot="footer">
          <app-footer/>
        </template>
      </app-layout>
    );
  }
}