<template>
    <ion-grid class="app-mob-dashboard ">
            <view_db_appmenu1 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    name="db_appmenu1"  
    ref='db_appmenu1' 
    @closeview="closeView($event)">
</view_db_appmenu1>
            <view_db_appmenu2 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    name="db_appmenu2"  
    ref='db_appmenu2' 
    @closeview="closeView($event)">
</view_db_appmenu2>
            <view_db_appmenu3 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    name="db_appmenu3"  
    ref='db_appmenu3' 
    @closeview="closeView($event)">
</view_db_appmenu3>
    </ion-grid>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import AppPortalView_dbService from '@/app-core/ctrl-service/app/app-portal-view-db-dashboard-service';



@Component({
    components: {
    }
})
export default class AppPortalView_dbBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AppPortalView_db
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AppPortalView_db
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AppPortalView_db
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppPortalView_db
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AppPortalView_db
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AppPortalView_db
     */
    protected getControlType(): string {
        return 'DASHBOARD'
    }

    /**
     * 全局 ui 服务
     *
     * @private
     * @type {GlobalUiService}
     * @memberof AppPortalView_db
     */
    private globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 建构部件服务对象
     *
     * @type {AppPortalView_dbService}
     * @memberof AppPortalView_db
     */
    protected service: AppPortalView_dbService = new AppPortalView_dbService();
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AppPortalView_db
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AppPortalView_db
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AppPortalView_db
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof AppPortalView_db
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AppPortalView_db
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((name: string) => {
                    this.viewState.next({ tag: name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AppPortalView_db
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AppPortalView_db
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './app-portal-view-db-dashboard.less';
</style>