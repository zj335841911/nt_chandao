import { Vue, Prop } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';

/**
 * 部件基类
 *
 * @export
 * @class ControlBase
 * @extends {Vue}
 */
export class ControlBase extends Vue {
    /**
     * 名称
     *
     * @type {string}
     * @memberof ControlBase
     */
    @Prop()
    public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ControlBase
     */
    @Prop()
    public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ControlBase
     */
    @Prop()
    public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ControlBase
     */
    @Prop()
    public viewparams: any;

    /**
     * 是否显示处理提示
     *
     * @type {boolean}
     * @memberof ControlBase
     */
    @Prop({ default: true })
    public showBusyIndicator?: boolean;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ControlBase
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string} 需子类指定具体类型
     * @memberof ControlBase
     */
    protected controlType: string = '';

    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {any[]}
     * @memberof ControlBase
     */
    protected counterServiceArray: any[] = [];

    /**
     * 组件创建完毕
     *
     * @memberof ControlBase
     */
    public created(): void {
        this.ctrlCreated();
    }

    /**
     * 部件创建完毕
     *
     * @protected
     * @memberof ControlBase
     */
    protected ctrlCreated(): void { }

    /**
     * 组件挂载完毕
     *
     * @memberof ControlBase
     */
    public mounted(): void {
        this.ctrlMounted();
    }

    /**
     * 部件挂载完毕
     *
     * @protected
     * @memberof ControlBase
     */
    protected ctrlMounted(): void { }

    /**
     * 组件销毁
     *
     * @memberof ControlBase
     */
    public destroyed(): void {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计数器刷新
     *
     * @memberof ControlBase
     */
    public counterRefresh(): void {
        this.counterServiceArray.forEach((item: any) => {
            if (item.refreshData && item.refreshData instanceof Function) {
                item.refreshData();
            }
        });
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ControlBase
     */
    public closeView(args: any[]): void {
        this.$emit("closeview", args);
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ControlBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ControlBase
     */
    public getData(): any {
        return null;
    }

}