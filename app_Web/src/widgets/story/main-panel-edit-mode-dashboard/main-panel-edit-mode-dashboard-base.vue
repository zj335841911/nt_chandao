<template>
  <div class='dashboard'>
    <row v-if="isEnableCustomized">
      <app-build @handleClick="handleClick"></app-build>
    </row>
    <row v-if="!isHasCustomized">
      <i-col :md="{ span: 24, offset: 0 }">
        <card class="portlet-card" :bordered="false" dis-hover :padding="0">
          <span>
                      <div class='portlet-container main-view-edit-modedashboard-container1 ' :style="{}">
                <row>
                  <i-col :md="{ span: 16, offset: 0 }" :lg="{ span: 16, offset: 0 }">
                      <div class="portlet-without-title">
                        <card class="portlet-card" :bordered="false" dis-hover :padding="0">
                        <span>
                                        <div class='portlet-container main-view-edit-modedashboard-container2 ' :style="{}">
                              <row>
                                <i-col :md="{ span: 24, offset: 0 }">
                                    <div class="portlet-without-title">
                                      <card class="portlet-card" :bordered="false" dis-hover :padding="0">
                                      <span>
                                                      <view_dashboard_sysportlet1 
                                          :viewState="viewState"  
                                          :viewparams="viewparams" 
                                          :context="context" 
                                          name="dashboard_sysportlet1"  
                                          ref='dashboard_sysportlet1' 
                                          @closeview="closeView($event)">
                                      </view_dashboard_sysportlet1>
                                      </span>
                                    </card>
                                    </div>
                                </i-col>
                                <i-col :md="{ span: 24, offset: 0 }">
                                    <div class="portlet-without-title">
                                      <card class="portlet-card" :bordered="false" dis-hover :padding="0">
                                      <span>
                                                      <view_dashboard_sysportlet3 
                                          :viewState="viewState"  
                                          :viewparams="viewparams" 
                                          :context="context" 
                                          name="dashboard_sysportlet3"  
                                          ref='dashboard_sysportlet3' 
                                          @closeview="closeView($event)">
                                      </view_dashboard_sysportlet3>
                                      </span>
                                    </card>
                                    </div>
                                </i-col>
                              </row>
                          </div>
                        </span>
                      </card>
                      </div>
                  </i-col>
                  <i-col :md="{ span: 8, offset: 0 }" :lg="{ span: 8, offset: 0 }">
                      <div class="portlet-without-title">
                        <card class="portlet-card" :bordered="false" dis-hover :padding="0">
                        <span>
                                        <div class='portlet-container main-view-edit-modedashboard-container3 ' :style="{}">
                              <row>
                                <i-col :md="{ span: 24, offset: 0 }">
                                    <div class="portlet-without-title">
                                      <card class="portlet-card" :bordered="false" dis-hover :padding="0">
                                      <span>
                                                      <view_dashboard_sysportlet2 
                                          :viewState="viewState"  
                                          :viewparams="viewparams" 
                                          :context="context" 
                                          name="dashboard_sysportlet2"  
                                          ref='dashboard_sysportlet2' 
                                          @closeview="closeView($event)">
                                      </view_dashboard_sysportlet2>
                                      </span>
                                    </card>
                                    </div>
                                </i-col>
                              </row>
                          </div>
                        </span>
                      </card>
                      </div>
                  </i-col>
                </row>
            </div>
          </span>
        </card>
      </i-col>
    </row>
    <row v-if="isHasCustomized" style="width: 100%;min-height: calc(100% - 40px);">
      <div class="portlet-container" style="position: relative;width:100%;">
        <template v-for="(item, index) of modelDta">
        <div :key="index" :style="{zIndex: 10, position: 'absolute', height: item.h*layoutRowH + 'px', width: `calc(100% / ${layoutColNum} * ${item.w})`,top: item.y*layoutRowH + 'px', left: `calc(100% / ${layoutColNum} * ${item.x})`}">
          <component :key="$util.createUUID()" :is="item.componentName" :name="item.portletCodeName" :context="JSON.parse(JSON.stringify(context))" :viewDefaultUsage="false" :isAdaptiveSize="true" :viewState="viewState"></component>
        </div>
        </template>
    </div>
    </row>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import StoryService from '@/service/story/story-service';
import MainPanel_EditModeService from './main-panel-edit-mode-dashboard-service';

import UtilService from '@/utilservice/util-service';


@Component({
    components: {
      
    }
})
export default class MainPanel_EditModeBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainPanel_EditMode
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainPanel_EditMode
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainPanel_EditMode
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainPanel_EditMode
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MainPanel_EditMode
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainPanel_EditMode
     */
    public getControlType(): string {
        return 'DASHBOARD'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainPanel_EditMode
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainPanel_EditModeService}
     * @memberof MainPanel_EditMode
     */
    public service: MainPanel_EditModeService = new MainPanel_EditModeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainPanel_EditMode
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainPanel_EditMode
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainPanel_EditMode
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }

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
</script>

<style lang='less'>
@import './main-panel-edit-mode-dashboard.less';
</style>