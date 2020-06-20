import { Vue, Emit, Prop, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';

/**
 * 视图基类
 *
 * @export
 * @class ViewBase
 * @extends {Vue}
 */
export class ViewBase extends Vue {

    /**
     * 视图状态通知对象
     *
     * @type {Subject<ViewState>}
     * @memberof ViewBase
     */
    public viewState: Subject<ViewState> = new Subject();

    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ViewBase
     */
    @Emit()
    public viewDatasChange(val: any): any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof ViewBase
     */
    @Prop()
    public viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof ViewBase
     */
    @Prop()
    public viewparam!: string;

    /**
     * 是否为默认模式，默认模式为导航模式
     *
     * @type {boolean}
     * @memberof ViewBase
     */
    @Prop({ default: true })
    public viewDefaultUsage!: boolean;

    /**
     * 快速搜索值
     *
     * @readonly
     * @type {string}
     * @memberof ViewBase
     */
    protected query: string = '';

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ViewBase
     */
    public context: any = {};

    /**
     * 视图参数
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected viewparams: any = {};

	/**
     * 视图标识
     *
     * @type {string}
     * @memberof ViewBase
     */
    protected viewtag: string = '';

    /**
     * 视图默认引擎
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected engine: any;

    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {any[]}
     * @memberof ViewBase
     */
    protected counterServiceArray: any[] = [];

    /**
     * 自定义视图上下文
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected customViewNavContexts: any = {};

    /**
     * 自定义视图参数
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected customViewParams: any = {};

    /**
     * 部件模型
     *
     * @protected
     * @type {*}
     * @memberof ViewBase
     */
    protected containerModel: any = {};

    /**
     * 是否为实体视图
     *
     * @protected
     * @type {boolean}
     * @memberof ViewBase
     */
    protected isDeView: boolean = true;

    /**
     * 是否存在实体视图控制关系
     *
     * @protected
     * @type {boolean}
     * @memberof ViewBase
     */
    protected isPsDer1n: boolean = false;

    /**
     * 表单嵌入视图
     *
     * @protected
     * @type {Subject<any>}
     * @memberof GridViewBase
     */
    @Prop()
    protected formDruipart?: Subject<any>;

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    @Watch('viewparam', { immediate: true, deep: true })
    public onParamData(newVal: any, oldVal: any): void {
        if (newVal) {
            for (let key in this.viewparams) {
                delete this.viewparams[key];
            }
            Object.assign(this.viewparams, JSON.parse(this.viewparam));
        }
    }

    /**
     * 视图参数变更
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    protected viewParamChange(newVal: any, oldVal: any): void { }

    /**
     * 处理应用上下文变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    @Watch('viewdata')
    public onViewData(newVal: any, oldVal: any): void {
        if (!Object.is(newVal, oldVal)) {
            this.$nextTick(() => {
                this.parseViewParam();
                this.viewDataChange(newVal, oldVal);
                if (this.engine) {
                    this.engine.load();
                }
            });
        }
    }

    /**
     * 视图上下文变化
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ViewBase
     */
    protected viewDataChange(newVal: any, oldVal: any): void { }

    /**
     * 组件创建完毕
     *
     * @memberof ViewBase
     */
    public created(): void {
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        this.viewCreated();
    }

    /**
     * 视图组件创建完毕
     *
     * @protected
     * @memberof ViewBase
     */
    protected viewCreated(): void { }

    /**
     * 组件挂载完毕
     *
     * @memberof ViewBase
     */
    public mounted(): void {
        this.engineInit();
        this.loadModel();
        this.viewMounted();
    }

    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof ViewBase
     */
    protected viewMounted(): void { }

    /**
     * 组件销毁之前
     *
     * @memberof ViewBase
     */
    public beforeDestroy(): void {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * 组件销毁
     *
     * @memberof ViewBase
     */
    public destroyed(): void {
        if (this.viewDefaultUsage) {
            const regExp = new RegExp(`^${this.context.srfsessionid}_(.*)`);
            for (const key in localStorage) {
                if (regExp.test(key)) {
                    localStorage.removeItem(key);
                }
            }
        }
    }

    /**
     * 引擎初始化
     *
     * @protected
     * @memberof ViewBase
     */
    protected engineInit(): void { }

    /**
     * 加载视图默认模型
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewBase
     */
    protected async loadModel(): Promise<void> { }

    /**
     * 计数器刷新
     *
     * @protected
     * @memberof ViewBase
     */
    protected counterRefresh(): void {
        if (this.counterServiceArray && this.counterServiceArray.length > 0) {
            this.counterServiceArray.forEach((item: any) => {
                if (item.refreshData && item.refreshData instanceof Function) {
                    item.refreshData();
                }
            })
        }
    }

    /**
     * 初始化视图参数
     *
     * @protected
     * @memberof ViewBase
     */
    protected parseViewParam(): void {
        for (let key in this.context) {
            delete this.context[key];
        }
        if (!this.viewDefaultUsage && this.viewdata && !Object.is(this.viewdata, '')) {
            Object.assign(this.context, JSON.parse(this.viewdata));
            if (this.context && this.context.srfparentdename) {
                Object.assign(this.viewparams, { srfparentdename: this.context.srfparentdename });
            }
            if (this.context && this.context.srfparentkey) {
                Object.assign(this.viewparams, { srfparentkey: this.context.srfparentkey });
            }
            if (this.$store.getters.getAppData() && this.$store.getters.getAppData().context) {
                Object.assign(this.context, this.$store.getters.getAppData().context);
            }
            this.handleCustomViewData();
            return;
        }
        const path = (this.$route.matched[this.$route.matched.length - 1]).path;
        const keys: Array<any> = [];
        const curReg = this.$pathToRegExp.pathToRegexp(path, keys);
        const matchArray = curReg.exec(this.$route.path);
        const tempValue: Object = {};
        keys.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item.name, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
        this.$viewTool.formatRouteParams(tempValue, this.$route, this.context, this.viewparams);
        if (this.$store.getters.getAppData() && this.$store.getters.getAppData().context) {
            Object.assign(this.context, this.$store.getters.getAppData().context);
        }
        if (this.isDeView) {
            //初始化视图唯一标识
            Object.assign(this.context, { srfsessionid: this.$util.createUUID() });
        }
        this.handleCustomViewData();
    }

	/**
     * 处理自定义视图参数
     *
     * @protected
     * @memberof ViewBase
     */
    protected handleCustomViewData(): void {
        if (this.isPsDer1n) {
            this.handleViewRes();
        }
        for (const key in this.customViewNavContexts) {
            if (this.customViewNavContexts.hasOwnProperty(key)) {
                const curNavContext = this.customViewNavContexts[key];
                this.handleCustomDataLogic(this.context, curNavContext, key.toLowerCase());
            }
        }
        for (const key in this.customViewParams) {
            if (this.customViewParams.hasOwnProperty(key)) {
                const curNavParam = this.customViewParams[key];
                this.handleCustomDataLogic(this.viewparams, curNavParam, key.toLowerCase());
            }
        }
    }

    /**
     * 处理自定义视图数据逻辑
     *
     * @protected
     * @param {*} curNavData
     * @param {*} tempData
     * @param {string} key
     * @memberof ViewBase
     */
    protected handleCustomDataLogic(data: any, curNavData: any, key: string): void {
        // 直接值直接赋值
        if (curNavData.isRawValue) {
            if (Object.is(curNavData.value, "null") || Object.is(curNavData.value, "")) {
                data[key] = null;
            } else {
                data[key] = curNavData.value;
            }
        } else {
            key = curNavData.value.toLowerCase();
            // 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
            if (this.context[key]) {
                data[key] = this.context[key];
            } else if (this.viewparams[key]) {
                data[key] = this.viewparams[key];
            } else {
                data[key] = null;
            }
        }
    }

    /**
     * 处理指定视图控制关系将父键转为父实体上下文
     *
     * @protected
     * @memberof ViewBase
     */
    protected handleViewRes(): void { }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ViewBase
     */
    public closeView(args: any[]): void {
        if (this.viewdata) {
            this.$emit('viewdataschange', [args]);
            this.$emit('close', [args]);
        } else if (this.$tabPageExp) {
            this.$tabPageExp.onClose(this.$route.fullPath);
        }
    }
}