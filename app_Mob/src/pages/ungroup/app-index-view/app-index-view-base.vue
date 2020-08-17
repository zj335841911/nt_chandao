<template>
<view_appmenu 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    :showBusyIndicator="true" 
    controlStyle=""   
    name="appmenu"  
    ref='appmenu' 
    @closeview="closeView($event)">
</view_appmenu>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';



@Component({
    components: {
    },
})
export default class AppIndexViewBase extends Vue {

    /**
     * 全局 ui 服务
     *
     * @private
     * @type {GlobalUiService}
     * @memberof AppIndexViewBase
     */
    private globaluiservice: GlobalUiService = new GlobalUiService();

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    @Prop() private _context!: string;

    /**
     * 视图参数
     *
     * @private
     * @type {string}
     * @memberof AppIndexViewBase
     */
    @Prop() private _viewparams!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof AppIndexViewBase
	 */
	protected viewtag: string = '15DFA5E1-68C2-4D93-A0FB-56E09EFEF56D';

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected context: any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected viewparams: any = {};

    /**
     * 是否显示部件视图头部，默认为false（显示）
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    @Prop({ default: false }) protected isShowViewHeader!: boolean;

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    protected model: any = {
        srfTitle: '应用首页视图',
        srfCaption: 'app.views.appindexview.caption',
        srfSubCaption: '',
        dataInfo: ''
    }

    /**
     * 视图上下文变化
     *
     * @param {string} newVal
     * @param {string} oldVal
     * @memberof  AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    protected containerModel: any = {
        view_appmenu: { name: 'appmenu', type: 'APPMENU' },
    };

    /**
     * 视图状态订阅对象
     *
     * @private
     * @type {Subject<{action: string, data: any}>}
     * @memberof AppIndexViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 解析视图参数
     *
     * @private
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    private engineInit(): void {
    }

    /**
     * Vue声明周期
     *
     * @memberof AppIndexViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof AppIndexViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof AppIndexViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        this.viewState.next({ tag: 'appmenu', action: 'load', data: {} });
        this.$viewTool.setIndexParameters([{ pathName: 'appindexview', parameterName: 'appindexview' }]);
        this.$viewTool.setIndexViewParam(this.context);

    }

    /**
     * 销毁视图回调
     *
     * @memberof AppIndexViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof AppIndexViewBase
     */
    protected afterDestroyed(){

    }


    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
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
     * @memberof AppIndexViewBase
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
     * 菜单位置
     *
     * @private
     * @type {string}
     * @memberof AppIndexViewBase
     */
    private mode: string ='vertical';

    /**
     * 当前主题
     *
     * @readonly
     * @memberof AppIndexViewBase
     */
    get selectTheme() {
        if (this.$router.app.$store.state.selectTheme) {
            return this.$router.app.$store.state.selectTheme;
        } else if (localStorage.getItem('theme-class')) {
            return localStorage.getItem('theme-class');
        } else {
            return 'app-default-theme';
        }
    }

    /**
     * 当前字体
     *
     * @readonly
     * @memberof AppIndexViewBase
     */
    get selectFont() {
        if (this.$router.app.$store.state.selectFont) {
            return this.$router.app.$store.state.selectFont;
        } else if (localStorage.getItem('font-family')) {
            return localStorage.getItem('font-family');
        } else {
            return 'Microsoft YaHei';
        }
    }

    /**
     * 菜单收缩变化
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    public collapseChange: boolean = false;

    /**
     * 菜单收缩点击
     *
     * @memberof AppIndexViewBase
     */
    public handleClick(): void {
        this.collapseChange = !this.collapseChange;
    }

    /**
     * 默认打开的视图
     *
     * @type {*}
     * @memberof AppIndexViewBase
     */
    public defPSAppView: any = {
    };

    /**
     * 应用起始页面
     *
     * @type {boolean}
     * @memberof AppIndexViewBase
     */
    public isDefaultPage: boolean = false;

    /**
     * 获取样式
     *
     * @readonly
     * @type {string[]}
     * @memberof AppIndexViewBase
     */
    get themeClasses(): string[] {
        return [
            Object.is(this.selectTheme, 'app_theme_blue') ? 'app_theme_blue' : '',
            Object.is(this.selectTheme, 'app-default-theme') ? 'app-default-theme' : '',
            Object.is(this.selectTheme, 'app_theme_darkblue') ? 'app_theme_darkblue' : '',
        ];
    }

    /**
     * 主题字体
     *
     * @readonly
     * @type {*}
     * @memberof AppIndexViewBase
     */
    get themeStyle(): any {
        return {
            'height': '100vh',
            'font-family': this.selectFont,
        }
    }

    /**
     * 获取路由列表
     *
     * @readonly
     * @type {any[]}
     * @memberof AppIndexViewBase
     */
    get getRouterList(): any[] {
        return this.$store.state.historyPathList;
    }

    /**
     * 获取路由键值
     *
     * @readonly
     * @type {string}
     * @memberof AppIndexViewBase
     */
    get getRouterViewKey(): string {
        return this.$route.fullPath;
    }

}
</script>

<style lang='less'>
@import './app-index-view.less';
</style>