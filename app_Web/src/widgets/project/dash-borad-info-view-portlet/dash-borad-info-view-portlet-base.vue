<template>
    <div class='porlet dash-borad-info-view' :style="{}">
        <div class="portlet-widthout-title">
        <project-dashboard-info-view :viewdata="JSON.stringify(context)" :viewDefaultUsage="false" ></project-dashboard-info-view>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProjectService from '@/service/project/project-service';
import DashBoradInfoViewService from './dash-borad-info-view-portlet-service';



@Component({
    components: {
      
    }
})
export default class ProjectDashBoradInfoViewBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof DashBoradInfoView
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof DashBoradInfoView
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof DashBoradInfoView
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof DashBoradInfoView
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof DashBoradInfoView
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof DashBoradInfoView
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DashBoradInfoView
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {DashBoradInfoViewService}
     * @memberof DashBoradInfoView
     */
    protected service: DashBoradInfoViewService = new DashBoradInfoViewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof DashBoradInfoView
     */
    protected appEntityService: ProjectService = new ProjectService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof DashBoradInfoView
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof DashBoradInfoView
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
     * @memberof DashBoradInfoView
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DashBoradInfoView
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashBoradInfoView
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof DashBoradInfoView
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashBoradInfoView
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
     * @memberof DashBoradInfoView
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashBoradInfoView
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './dash-borad-info-view-portlet.less';
</style>