
<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'appportalview': true, 'app-portal-viewtest': true }">
    <ion-header>
        <ion-toolbar class="ionoc-view-header">
            <ion-buttons slot="start">
                <ion-button v-show="isShowBackButton" @click="closeView">
                    <ion-icon name="chevron-back"></ion-icon>
                    {{$t('app.button.back')}}
                </ion-button>
            </ion-buttons>
            <ion-title>{{$t(model.srfCaption)}}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
                <view_dashboard 
            :viewState="viewState"  
            :viewparams="viewparams" 
            :context="context" 
            name="dashboard"  
            ref='dashboard' 
            @closeview="closeView($event)">
        </view_dashboard>
    </ion-content>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';



@Component({
    components: {
    },
})
export default class AppPortalViewtestBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @private
     * @type {GlobalUiService}
     * @memberof AppPortalViewtestBase
     */
    private globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof AppPortalViewtestBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @private
     * @type {string}
     * @memberof AppPortalViewtestBase
     */
    @Prop() private _context!: string;

    /**
     * 视图参数
     *
     * @private
     * @type {string}
     * @memberof AppPortalViewtestBase
     */
    @Prop() private _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof AppPortalViewtestBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof AppPortalViewtestBase
	 */
	protected viewtag: string = '5987D6EC-BF5B-41F3-8EB2-111F7FDC6F9A';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppPortalViewtestBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppPortalViewtestBase
     */
    protected viewparams: any = {};

    /**
     * 是否显示部件视图头部，默认为false（显示）
     *
     * @type {boolean}
     * @memberof AppPortalViewtestBase
     */
    @Prop({ default: false }) protected isShowViewHeader!: boolean;

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof AppPortalViewtestBase
     */
    protected model: any = {
        srfTitle: '应用门户视图2',
        srfCaption: 'app.views.appportalviewtest.caption',
        srfSubCaption: '',
        dataInfo: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  AppPortalViewtestBase
     */
    @Watch('_context')
    on_context(newVal: string, oldVal: string) {
        const _this: any = this;
        if (!Object.is(newVal, oldVal) && _this.engine) {
            _this.parseViewParam();
            _this.engine.load();
        }
        
    }

    /**
     * 视图参数变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @returns
     * @memberof IBizChart
     */
    @Watch('_viewparams')
    on_viewparams(newVal: string, oldVal: string) {
        if (!Object.is(newVal, oldVal)) {
            if (!this.viewDefaultUsage && this._viewparams && !Object.is(this._viewparams, '')) {
                Object.assign(this.viewparams, JSON.parse(this._viewparams));
                return;
            }
        }
    }

    /**
     * 容器模型
     *
     * @type {*}
     * @memberof AppPortalViewtestBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };

    /**
     * 视图状态订阅对象
     *
     * @private
     * @type {Subject<{action: string, data: any}>}
     * @memberof AppPortalViewtestBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 解析视图参数
     *
     * @private
     * @memberof AppPortalViewtestBase
     */
    private parseViewParam(): void {
        if (!this.viewDefaultUsage && this._context && !Object.is(this._context, '')) {
            Object.assign(this.context, JSON.parse(this._context));
            return;
        }
        // 参数异常
        if (!this.viewDefaultUsage) {
            return;
        }

        const path = (this.$route.matched[this.$route.matched.length - 1]).path;
        const keys: Array<any> = [];
        const curReg = this.$pathToRegExp.pathToRegexp(path, keys);
        const matchArray = curReg.exec(this.$route.path);
        let tempValue: Object = {};
        keys.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item.name, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
        this.$viewTool.formatRouteParams(tempValue, this.$route, this.context, this.viewparams);
    }

    /**
     * 是否显示返回按钮
     *
     * @readonly
     * @type {boolean}
     * @memberof AppPortalViewtestBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.$route && !this.viewDefaultUsage) {
            return false;
        }
        return true;
    }


    /**
     * 引擎初始化
     *
     * @private
     * @memberof AppPortalViewtestBase
     */
    private engineInit(): void {
    }

    /**
     * Vue声明周期
     *
     * @memberof AppPortalViewtestBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof AppPortalViewtestBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();

    }

    /**
     * 销毁之前
     *
     * @memberof AppPortalViewtestBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof AppPortalViewtestBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof AppPortalViewtestBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.viewState.next({ tag: 'dashboard', action: 'load', data: {} });

    }

    /**
     * 销毁视图回调
     *
     * @memberof AppPortalViewtestBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof AppPortalViewtestBase
     */
    protected afterDestroyed(){

    }


    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AppPortalViewtestBase
     */
    protected closeView(args: any[]): void {
        if (this.viewDefaultUsage) {
            this.$store.commit("deletePage", this.$route.fullPath);
            this.$router.go(-1);
        } else {
            this.$emit("close", { status: "success", action: "close", data: args instanceof MouseEvent ? null : args });
        }
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof AppPortalViewtestBase
     */
    get refreshdata(): number | null {
        return this.$store.getters['viewaction/getRefreshData'](this.viewtag);
    }

    /**
     * 监控数据变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @returns
     * @memberof AppPortalViewtestBase
     */
    @Watch('refreshdata')
    onRefreshData(newVal: any, oldVal: any) {
        if (newVal === null || newVal === undefined) {
            return;
        }
        if (newVal === 0) {
            return;
        }
        const _this: any = this;
        if (_this.onRefreshView && _this.onRefreshView instanceof Function) {
            _this.onRefreshView();
        }
    }


    /**
     * 应用起始页面
     *
     * @type {boolean}
     * @memberof AppPortalViewtest
     */
    public isDefaultPage: boolean = false;
    
}
</script>

<style lang='less'>
@import './app-portal-viewtest.less';
</style>