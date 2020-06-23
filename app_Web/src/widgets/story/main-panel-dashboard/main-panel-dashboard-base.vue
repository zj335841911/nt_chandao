<template>
  <div class='dashboard'>
    <row v-if="isEnableCustomized">
      <app-build @handleClick="handleClick"></app-build>
    </row>
    <row v-if="!isHasCustomized">
      <i-col :md="{ span: 24, offset: 0 }">
        <card class="portlet-card" :bordered="false" dis-hover :padding="0">
          <span>
                      <div class='portlet-container main-viewdashboard-container1 ' :style="{}">
                <row>
                  <i-col :md="{ span: 16, offset: 0 }" :lg="{ span: 16, offset: 0 }">
                      <div class="portlet-without-title">
                        <card class="portlet-card" :bordered="false" dis-hover :padding="0">
                        <span>
                                        <div class='portlet-container main-viewdashboard-container2 ' :style="{}">
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
                                                      <view_dashboard_sysportlet4 
                                          :viewState="viewState"  
                                          :viewparams="viewparams" 
                                          :context="context" 
                                          name="dashboard_sysportlet4"  
                                          ref='dashboard_sysportlet4' 
                                          @closeview="closeView($event)">
                                      </view_dashboard_sysportlet4>
                                      </span>
                                    </card>
                                    </div>
                                </i-col>
                                <i-col :md="{ span: 24, offset: 0 }">
                                    <div class="portlet-without-title">
                                      <card class="portlet-card" :bordered="false" dis-hover :padding="0">
                                      <span>
                                                      <div class='portlet-container main-viewdashboard-container4  dashboard-footer-button-wrapper' :style="{}">
                                            <div style = 'display : flex;  justify-content :center;  '>
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
                                            </div>
                                        </div>
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
                                        <div class='portlet-container main-viewdashboard-container3 ' :style="{}">
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
import { Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, CtrlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import MainPanelService from './main-panel-dashboard-service';
import UtilService from '@/utilservice/util-service';


/**
 * dashboard部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {MainPanelBase}
 */
@Component({
    components: {
      
    }
})
@VueLifeCycleProcessing()
export default class MainPanelBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainPanelService}
     * @memberof MainPanel
     */
    public service: MainPanelService = new MainPanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainPanel
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });
    /**
     * 是否支持看板定制
     *
     * @public
     * @type {(boolean)}
     * @memberof MainPanel
     */
    @Prop() public isEnableCustomized!:boolean;

    /**
     * 是否已有看板定制
     *
     * @public
     * @type {(boolean)}
     * @memberof MainPanel
     */
    public isHasCustomized:boolean = false;

    /**
     * 模型数据
     *
     * @public
     * @type {(*)}
     * @memberof MainPanel
     */
    public modelDta:any;

    /**
     * modleId
     *
     * @type {string}
     * @memberof MainPanel
     */
    public modelId:string = "dashboard_story_mainpanel";

    /**
     * 建构功能服务对象
     *
     * @type {UtilService}
     * @memberof MainPanel
     */
    public utilService:UtilService = new UtilService();

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof MainPanel
     */
    public utilServiceName:string = "";

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainPanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainPanel
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MainPanel
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainPanel
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
     *  @memberof MainPanel
     */   
    public layoutColNum:number = 12;

    /**
     * 动态设计单元格高度，80px
     *
     *  @memberof MainPanel
     */ 
    public layoutRowH:number = 80;

    /**
     *  通知状态
     *
     *  @memberof MainPanel
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
     * @memberof MainPanel
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
     * @memberof MainPanel
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
     * @memberof MainPanel
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainPanel
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './main-panel-dashboard.less';
</style>