<template>
  <div class='tabviewpanel' style="height:100%;" v-if = 'isActivied' >
        <case-cur-test-task-grid-view 
      class='viewcontainer2' 
      :viewdata="JSON.stringify(context)" 
      :viewparam="JSON.stringify(viewparams)"
      @viewload="viewDatasChange($event)" 
      :viewDefaultUsage="false" >
    </case-cur-test-task-grid-view>
  </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TestTaskService from '@/service/test-task/test-task-service';
import MainTabExpViewtabviewpanelService from './main-tab-exp-viewtabviewpanel-tabviewpanel-service';



@Component({
    components: {
      
    }
})
export default class MainTabExpViewtabviewpanelBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainTabExpViewtabviewpanel
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainTabExpViewtabviewpanel
     */
    protected getControlType(): string {
        return 'TABVIEWPANEL'
    }



    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabviewpanelService}
     * @memberof MainTabExpViewtabviewpanel
     */
    protected service: MainTabExpViewtabviewpanelService = new MainTabExpViewtabviewpanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof MainTabExpViewtabviewpanel
     */
    protected appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainTabExpViewtabviewpanel
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainTabExpViewtabviewpanel
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
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainTabExpViewtabviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainTabExpViewtabviewpanel
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof MainTabExpViewtabviewpanel
     */
    protected isActivied: boolean = true;
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof MainTabExpViewtabviewpanel
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainTabExpViewtabviewpanel
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.$forceUpdate();

            });
        }
    }

    /**
     * 视图数据变化
     *
     * @memberof  MainTabExpViewtabviewpanel
     */
    protected viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof MainTabExpViewtabviewpanel
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainTabExpViewtabviewpanel
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }



}
</script>

<style lang='less'>
@import './main-tab-exp-viewtabviewpanel-tabviewpanel.less';
</style>