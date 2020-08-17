<template>
    <ion-grid class="app-mob-dashboard ">
    </ion-grid>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import AppPortalViewtest_dbService from '@/app-core/ctrl-service/app/app-portal-viewtest-db-dashboard-service';



@Component({
    components: {
    }
})
export default class AppPortalViewtest_dbBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AppPortalViewtest_db
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AppPortalViewtest_db
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AppPortalViewtest_db
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppPortalViewtest_db
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AppPortalViewtest_db
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AppPortalViewtest_db
     */
    protected getControlType(): string {
        return 'DASHBOARD'
    }

    /**
     * 全局 ui 服务
     *
     * @private
     * @type {GlobalUiService}
     * @memberof AppPortalViewtest_db
     */
    private globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 建构部件服务对象
     *
     * @type {AppPortalViewtest_dbService}
     * @memberof AppPortalViewtest_db
     */
    protected service: AppPortalViewtest_dbService = new AppPortalViewtest_dbService();
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AppPortalViewtest_db
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AppPortalViewtest_db
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AppPortalViewtest_db
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof AppPortalViewtest_db
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AppPortalViewtest_db
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
     * @memberof AppPortalViewtest_db
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AppPortalViewtest_db
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './app-portal-viewtest-db-dashboard.less';
</style>