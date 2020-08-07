<template>
    <div class='porlet main-dashboard-viewdashboard-container2' :style="{}">
            <i-col :xs="{ span: 12, offset: 0 }" :sm="{ span: 12, offset: 0 }" :md="{ span: 12, offset: 0 }" :lg="{ span: 12, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_dashboard_sysportlet1 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_sysportlet1"  
                      ref='dashboard_sysportlet1' 
                      @closeview="closeView($event)">
                  </view_dashboard_sysportlet1>
                </div>
            </i-col>
            <i-col :xs="{ span: 12, offset: 0 }" :sm="{ span: 12, offset: 0 }" :md="{ span: 12, offset: 0 }" :lg="{ span: 12, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_dashboard_sysportlet2 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_sysportlet2"  
                      ref='dashboard_sysportlet2' 
                      @closeview="closeView($event)">
                  </view_dashboard_sysportlet2>
                </div>
            </i-col>
            <i-col :xs="{ span: 24, offset: 0 }" :sm="{ span: 24, offset: 0 }" :md="{ span: 24, offset: 0 }" :lg="{ span: 24, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_dashboard_sysportlet4 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_sysportlet4"  
                      ref='dashboard_sysportlet4' 
                      @closeview="closeView($event)">
                  </view_dashboard_sysportlet4>
                </div>
            </i-col>
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_dashboard_container4 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_container4"  
                      ref='dashboard_container4' 
                      @closeview="closeView($event)">
                  </view_dashboard_container4>
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
import ProductService from '@/service/product/product-service';
import MainDashboardViewdashboard_container2Service from './main-dashboard-viewdashboard-container2-portlet-service';



@Component({
    components: {
      
    }
})
export default class ProductMainDashboardViewdashboard_container2Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainDashboardViewdashboard_container2
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainDashboardViewdashboard_container2
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainDashboardViewdashboard_container2
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainDashboardViewdashboard_container2
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainDashboardViewdashboard_container2
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainDashboardViewdashboard_container2
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainDashboardViewdashboard_container2
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainDashboardViewdashboard_container2Service}
     * @memberof MainDashboardViewdashboard_container2
     */
    protected service: MainDashboardViewdashboard_container2Service = new MainDashboardViewdashboard_container2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof MainDashboardViewdashboard_container2
     */
    protected appEntityService: ProductService = new ProductService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainDashboardViewdashboard_container2
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainDashboardViewdashboard_container2
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
     * @memberof MainDashboardViewdashboard_container2
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainDashboardViewdashboard_container2
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainDashboardViewdashboard_container2
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MainDashboardViewdashboard_container2
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainDashboardViewdashboard_container2
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
     * @memberof MainDashboardViewdashboard_container2
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainDashboardViewdashboard_container2
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './main-dashboard-viewdashboard-container2-portlet.less';
</style>