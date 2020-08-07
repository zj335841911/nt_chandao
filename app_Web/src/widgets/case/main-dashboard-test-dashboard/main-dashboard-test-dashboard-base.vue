<template>
  <div class='dashboard'>
    <row v-if="isEnableCustomized">
      <app-build @handleClick="handleClick"></app-build>
    </row>
    <row v-if="!isHasCustomized">
          <div style = ''>
      <i-col :md="{ span: 24, offset: 0 }">
        <card :bordered="false" dis-hover :padding="0">
          <p slot='title'>
            
            <span class="line"></span>
          </p>
          <a slot='extra'></a>
          <span>
          <view_dashboard_container1 
              :viewState="viewState"  
              :viewparams="viewparams" 
              :context="context" 
              name="dashboard_container1"  
              ref='dashboard_container1' 
              @closeview="closeView($event)">
          </view_dashboard_container1>
          </span>
        </card>
      </i-col>
          </div>
    </row>
    <row v-if="isHasCustomized" style="width: 100%;min-height: calc(100% - 40px);">
      <div class="container" style="position: relative;width:100%;">
        <template v-for="(item, index) of modelDta">
        <div :key="index" :style="{zIndex: 10, position: 'absolute', height: item.h*layoutRowH + 'px', width: `calc(100% / ${layoutColNum} * ${item.w})`,top: item.y*layoutRowH + 'px', left: `calc(100% / ${layoutColNum} * ${item.x})`,'padding':'8px'}">
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
import CaseService from '@/service/case/case-service';
import MainDashboardTestService from './main-dashboard-test-dashboard-service';

import UtilService from '@/utilservice/util-service';


@Component({
    components: {
      
    }
})
export default class MainDashboardTestBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainDashboardTest
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainDashboardTest
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainDashboardTest
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainDashboardTest
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainDashboardTest
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainDashboardTest
     */
    protected getControlType(): string {
        return 'DASHBOARD'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainDashboardTest
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainDashboardTestService}
     * @memberof MainDashboardTest
     */
    protected service: MainDashboardTestService = new MainDashboardTestService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof MainDashboardTest
     */
    protected appEntityService: CaseService = new CaseService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainDashboardTest
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainDashboardTest
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
     * @protected
     * @type {(boolean)}
     * @memberof MainDashboardTest
     */
    @Prop() protected isEnableCustomized!:boolean;

    /**
     * 是否已有看板定制
     *
     * @protected
     * @type {(boolean)}
     * @memberof MainDashboardTest
     */
    protected isHasCustomized:boolean = false;

    /**
     * 模型数据
     *
     * @protected
     * @type {(*)}
     * @memberof MainDashboardTest
     */
    protected modelDta:any;

    /**
     * modleId
     *
     * @type {string}
     * @memberof MainDashboardTest
     */
    protected modelId:string = "dashboard_case_maindashboardtest";

    /**
     * 建构功能服务对象
     *
     * @type {UtilService}
     * @memberof MainDashboardTest
     */
    protected utilService:UtilService = new UtilService();

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof MainDashboardTest
     */
    protected utilServiceName:string = "";

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainDashboardTest
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainDashboardTest
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MainDashboardTest
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainDashboardTest
     */    
    protected afterCreated(){
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
     *  @memberof MainDashboardTest
     */   
    public layoutColNum:number = 12;

    /**
     * 动态设计单元格高度，80px
     *
     *  @memberof MainDashboardTest
     */ 
    public layoutRowH:number = 80;

    /**
     *  通知状态
     *
     *  @memberof MainDashboardTest
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
     * @memberof MainDashboardTest
     */
    protected loadModel(){
        if(this.isEnableCustomized){
          this.utilService.getService(this.utilServiceName).then((service:any) =>{
            service.loadModelData(JSON.parse(JSON.stringify(this.context)),{modelid:this.modelId}).then((res:any) =>{
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
            })
          })
        }else{
          this.notifyState();
        }
    }

    /**
     * 处理私人定制按钮
     *
     * @memberof MainDashboardTest
     */
    protected handleClick(){
      const view:any ={
        viewname: 'app-portal-design',
        title: '面板设计',
        width: 1600,
        placement: 'DRAWER_RIGHT'
      }
      const viewparam:any ={
        modelid:this.modelId,
        utilServiceName:this.utilServiceName,
        appdeName:'Case'
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
     * @memberof MainDashboardTest
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainDashboardTest
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './main-dashboard-test-dashboard.less';
</style>