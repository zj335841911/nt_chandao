import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import MainPanel_EditModeService from './main-panel-edit-mode-dashboard-service';
import UtilService from '@/utilservice/util-service';


/**
 * dashboard部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainPanel_EditModeDashboardBase}
 */
export class MainPanel_EditModeDashboardBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainPanel_EditModeService}
     * @memberof MainPanel_EditModeDashboardBase
     */
    public service: MainPanel_EditModeService = new MainPanel_EditModeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainPanel_EditModeDashboardBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainPanel_EditModeDashboardBase
     */
    protected appDeName: string = 'story';
    /**
     * 是否支持看板定制
     *
     * @public
     * @type {(boolean)}
     * @memberof MainPanel_EditMode
     */
    @Prop() public isEnableCustomized!:boolean;

    /**
     * 是否已有看板定制
     *
     * @public
     * @type {(boolean)}
     * @memberof MainPanel_EditMode
     */
    public isHasCustomized:boolean = false;

    /**
     * 模型数据
     *
     * @public
     * @type {(*)}
     * @memberof MainPanel_EditMode
     */
    public modelDta:any;

    /**
     * modleId
     *
     * @type {string}
     * @memberof MainPanel_EditMode
     */
    public modelId:string = "dashboard_story_mainpanel_editmode";

    /**
     * 建构功能服务对象
     *
     * @type {UtilService}
     * @memberof MainPanel_EditMode
     */
    public utilService:UtilService = new UtilService();

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof MainPanel_EditMode
     */
    public utilServiceName:string = "";

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainPanel_EditMode
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainPanel_EditMode
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MainPanel_EditMode
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainPanel_EditMode
     */    
    public afterCreated(){
      if (this.viewState) {
          this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
              if (!Object.is(tag, this.name)) {
                  return;
              }
              if (Object.is('load', action)) {
                  this.loadModel();
              }
          });
      }
    }

    /**
     * 动态设计水平列数
     *
     *  @memberof MainPanel_EditMode
     */   
    public layoutColNum:number = 12;

    /**
     * 动态设计单元格高度，80px
     *
     *  @memberof MainPanel_EditMode
     */ 
    public layoutRowH:number = 80;

    /**
     *  通知状态
     *
     *  @memberof MainPanel_EditMode
     */    
    public notifyState(){
      this.$nextTick(() =>{
        if (this.isHasCustomized) {
          if (this.modelDta && this.modelDta.length > 0) {
            this.modelDta.forEach((item: any) => {
              this.viewState.next({
                tag: item.portletCodeName,
                action: "load",
                data: JSON.parse(JSON.stringify(this.viewparams))
              });
            });
          }
        } else {
          if (this.viewState) {
            const refs: any = this.$refs;
            Object.keys(refs).forEach((name: string) => {
              this.viewState.next({
                tag: name,
                action: "load",
                data: JSON.parse(JSON.stringify(this.viewparams))
              });
            });
          }
        }
      })
    }

    /**
     * 加载布局与数据模型
     *
     * @memberof MainPanel_EditMode
     */
    public loadModel(){
        if(this.isEnableCustomized){
          this.utilService.getService(this.utilServiceName).then((service:any) =>{
            service.loadModelData(JSON.parse(JSON.stringify(this.context)),{modelid:this.modelId,utilServiceName:this.utilServiceName}).then((res:any) =>{
              if(res && res.status == 200){
                const data:any = res.data;
                if(data && data.length >0){
                  this.isHasCustomized = true;
                  this.modelDta = data;
                  this.$forceUpdate();
                }else{
                  this.isHasCustomized = false;
                }
                this.notifyState();
              }else{
                console.error("加载面板模型异常");
                this.isHasCustomized = false;
                this.notifyState();
              }
            }).catch((error:any)=>{
                console.error("加载面板模型异常");
                console.error(error);
                this.isHasCustomized = false;
                this.notifyState();
            });
          })
        }else{
          this.notifyState();
        }
    }

    /**
     * 处理私人定制按钮
     *
     * @memberof MainPanel_EditMode
     */
    public handleClick(){
      const view:any ={
        viewname: 'app-portal-design',
        title: '面板设计',
        width: 1600,
        placement: 'DRAWER_RIGHT'
      }
      const viewparam:any ={
        modelid:this.modelId,
        utilServiceName:this.utilServiceName,
        appdeName:'Story'
      }
      const appdrawer = this.$appdrawer.openDrawer(view, JSON.parse(JSON.stringify(this.context)), viewparam);
      appdrawer.subscribe((result: any) => {
          if(Object.is(result.ret,'OK')){
            this.loadModel();
          }
      });
    }

    /**
     * vue 生命周期
     *
     * @memberof MainPanel_EditMode
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainPanel_EditMode
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}