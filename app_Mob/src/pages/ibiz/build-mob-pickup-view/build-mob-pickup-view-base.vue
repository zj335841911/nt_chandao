<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true, 'demobpickupview': true, 'build-mob-pickup-view': true }">
    
    <ion-header>
                <van-search
    v-model="quickValue"
    :placeholder="$t('app.fastsearch')"
    @input="quickValueChange($event)"
  />

    </ion-header>


    <ion-content>
                <view_pickupviewpanel
            :viewState="viewState"
            viewName="BuildMobPickupView"  
            :viewparams="viewparams" 
            :context="context" 
            :isSingleSelect="isSingleSelect"
            :isShowButtons="isShowButtons"
            name="pickupviewpanel"  
            ref='pickupviewpanel' 
            @selectionchange="pickupviewpanel_selectionchange($event)"  
            @load="pickupviewpanel_load($event)"  
            @closeview="closeView($event)">
        </view_pickupviewpanel>
    </ion-content>
    <ion-footer class="view-footer" style="z-index:9;">
        <ion-toolbar style="text-align: center;" class="mobpickupview_button">
    <ion-button @click="onClickCancel" color="light">{{$t('app.button.cancel')}}</ion-button>
    <ion-button @click="onClickOk" :disabled="viewSelections.length === 0">{{$t('app.button.confirm')}}</ion-button>
</ion-toolbar>

    </ion-footer>
</ion-page>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import BuildService from '@/app-core/service/build/build-service';

import MobPickupViewEngine from '@engine/view/mob-pickup-view-engine';
import BuildUIService from '@/ui-service/build/build-ui-action';

@Component({
    components: {
    },
})
export default class BuildMobPickupViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof BuildMobPickupViewBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof BuildMobPickupViewBase
     */
    protected appEntityService: BuildService = new BuildService();

    /**
     * 实体UI服务对象
     *
     * @type BuildUIService
     * @memberof BuildMobPickupViewBase
     */
    public appUIService: BuildUIService = new BuildUIService(this.$store);

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof BuildMobPickupViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 视图上下文
     *
     * @type {string}
     * @memberof BuildMobPickupViewBase
     */
    @Prop() protected _context!: string;

    /**
     * 视图参数
     *
     * @type {string}
     * @memberof BuildMobPickupViewBase
     */
    @Prop() protected _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof BuildMobPickupViewBase
     */
    @Prop({ default: "routerView" }) protected viewDefaultUsage!: string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof BuildMobPickupViewBase
	 */
	protected viewtag: string = '85742d38f356f400b16652a3f7ae714b';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof BuildMobPickupViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BuildMobPickupViewBase
     */
    protected viewparams: any = {};

    /**
     * 视图导航上下文
     *
     * @protected
     * @type {*}
     * @memberof BuildMobPickupViewBase
     */
    protected navContext: any = {};

    /**
     * 视图导航参数
     *
     * @protected
     * @type {*}
     * @memberof BuildMobPickupViewBase
     */
    protected navParam: any = {};

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof BuildMobPickupViewBase
     */
    protected model: any = {
        srfTitle: '版本移动端数据选择视图',
        srfCaption: 'build.views.mobpickupview.caption',
        srfSubCaption: '',
        dataInfo: '',
        iconcls: '',
        icon: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  BuildMobPickupViewBase
     */
    @Watch('_context')
    on_context(newVal: string, oldVal: string) {
        const _this: any = this;
        this.parseViewParam();
        if (!Object.is(newVal, oldVal) && _this.engine) {
            this.$nextTick(()=>{_this.engine.load();})
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
        this.parseViewParam();
    }

    /**
     * 容器模型
     *
     * @type {*}
     * @memberof BuildMobPickupViewBase
     */
    protected containerModel: any = {
        view_pickupviewpanel: { name: 'pickupviewpanel', type: 'PICKUPVIEWPANEL' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };

    /**
     * 视图状态订阅对象
     *
     * @type {Subject<{action: string, data: any}>}
     * @memberof BuildMobPickupViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 是否显示标题
     *
     * @type {string}
     * @memberof BuildMobPickupViewBase
     */
    @Prop({default:true}) protected showTitle?: boolean;


    /**
     * 解析视图参数
     *
     * @memberof BuildMobPickupViewBase
     */
    protected parseViewParam(): void {
        const { context, param } = this.$viewTool.formatNavigateViewParam(this, true);
        this.context = { ...context };
        this.viewparams = { ...param }
    }

    /**
     * 是否显示返回按钮
     *
     * @readonly
     * @type {boolean}
     * @memberof BuildMobPickupViewBase
     */
    get isShowBackButton(): boolean {
        // 存在路由，非路由使用，嵌入
        if (this.viewDefaultUsage === "indexView") {
            return false;
        }
        return true;
    }

    /**
     * 视图引擎
     *
     * @type {Engine}
     * @memberof BuildMobPickupViewBase
     */
    protected engine: MobPickupViewEngine = new MobPickupViewEngine();

    /**
     * 引擎初始化
     *
     * @memberof BuildMobPickupViewBase
     */
    protected engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'build',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * Vue声明周期
     *
     * @memberof BuildMobPickupViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * Vue声明周期
     *
     * @memberof BuildMobPickupViewBase
     */
    public activated() {
        this.afterMounted();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof BuildMobPickupViewBase
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
     * @memberof BuildMobPickupViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof BuildMobPickupViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof BuildMobPickupViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }

    }

    /**
     * 销毁视图回调
     *
     * @memberof BuildMobPickupViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof BuildMobPickupViewBase
     */
    protected afterDestroyed(){
        if (this.viewDefaultUsage !== "indexView" && Object.keys(localStorage).length > 0) {
            Object.keys(localStorage).forEach((item: string) => {
                if (item.startsWith(this.context.srfsessionid)) {
                    localStorage.removeItem(item);
                }
            });
        }

    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildMobPickupViewBase
     */
    protected pickupviewpanel_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildMobPickupViewBase
     */
    protected pickupviewpanel_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }


    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof BuildMobPickupViewBase
     */
    protected async closeView(args: any[]): Promise<any> {
        if (this.viewDefaultUsage === "routerView" ) {
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
     * @memberof BuildMobPickupViewBase
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
     * @memberof BuildMobPickupViewBase
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
     * 视图选中数据
     *
     * @type {any[]}
     * @memberof BuildMobPickupView
     */
    public viewSelections: any[] = [];

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof BuildMobPickupView
     */
    @Prop({default: true}) public isShowButtons!: boolean;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof BuildMobPickupView
     */
    public isSingleSelect: boolean = true;

    /**
     * 确定
     *
     * @memberof BuildMobPickupView
     */
    public onClickOk(): void {
        this.viewDatasChange(this.viewSelections);
        this.$emit('close', this.viewSelections);
    }

    /**
     * 取消
     *
     * @memberof BuildMobPickupView
     */
    public onClickCancel(): void {
        this.$emit('close', null);
    }

    /**
     * 快速搜索值
     *
     * @memberof BuildMobPickupView
     */
    public quickValue = "";

    /**
     * 快速搜索
     *
     * @memberof BuildMobPickupView
     */
    public async quickValueChange(event: any) {
        const pickupviewpanel: any = this.$refs.pickupviewpanel;
        if (pickupviewpanel) {
            let response = await pickupviewpanel.quickSearch(this.quickValue);
            if (response) {
                
            }
        }
    }

}
</script>

<style lang='less'>
@import './build-mob-pickup-view.less';
</style>