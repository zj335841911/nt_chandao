<template>
    <div class='porlet dashboard-viewdashboard-container5' :style="{}">
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_dashboard_sysportlet7 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_sysportlet7"  
                      ref='dashboard_sysportlet7' 
                      @closeview="closeView($event)">
                  </view_dashboard_sysportlet7>
                </div>
            </i-col>
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_dashboard_sysportlet8 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_sysportlet8"  
                      ref='dashboard_sysportlet8' 
                      @closeview="closeView($event)">
                  </view_dashboard_sysportlet8>
                </div>
            </i-col>
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_dashboard_sysportlet9 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_sysportlet9"  
                      ref='dashboard_sysportlet9' 
                      @closeview="closeView($event)">
                  </view_dashboard_sysportlet9>
                </div>
            </i-col>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import DashboardViewdashboard_container5Service from './dashboard-viewdashboard-container5-portlet-service';



@Component({
    components: {
      
    }
})
export default class IbzMyTerritoryDashboardViewdashboard_container5Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof DashboardViewdashboard_container5
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof DashboardViewdashboard_container5
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof DashboardViewdashboard_container5
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DashboardViewdashboard_container5
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof DashboardViewdashboard_container5
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof DashboardViewdashboard_container5
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DashboardViewdashboard_container5
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {DashboardViewdashboard_container5Service}
     * @memberof DashboardViewdashboard_container5
     */
    protected service: DashboardViewdashboard_container5Service = new DashboardViewdashboard_container5Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof DashboardViewdashboard_container5
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof DashboardViewdashboard_container5
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof DashboardViewdashboard_container5
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
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof DashboardViewdashboard_container5
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DashboardViewdashboard_container5
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashboardViewdashboard_container5
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof DashboardViewdashboard_container5
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashboardViewdashboard_container5
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof DashboardViewdashboard_container5
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashboardViewdashboard_container5
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './dashboard-viewdashboard-container5-portlet.less';
</style>