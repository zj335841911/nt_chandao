import { Provide } from 'vue-property-decorator';
import { CtrlBase } from './CtrlBase';

/**
 * 分页导航面板部件控制器
 *
 * @export
 * @class TabExpPanel
 * @extends {CtrlBase}
 */
export class TabExpPanel extends CtrlBase {

    /**
     * 行为参数
     *
     * @protected
     * @type {*}
     * @memberof TabExpPanel
     */
    protected action: any = '';

    /**
     * 当前激活分页面板项
     *
     * @protected
     * @type {string}
     * @memberof TabExpPanel
     */
    protected activatedTabViewPanel: string = '';

    /**
     * 所有面板项是否初始化状态管理
     *
     * @protected
     * @type {*}
     * @memberof TabExpPanel
     */
    protected isInit: any = {};

    /**
     * 分页视图面板数据变更
     *
     * @protected
     * @memberof TabExpPanel
     */
    protected tabViewPanelDatasChange = (): void => {
        this.counterRefresh();
    }

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof TabExpPanel
     */
    protected ctrlCreated(): void {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.action = action;
                this.viewState.next({ tag: this.activatedTabViewPanel, action: action, data: data });
                this.$forceUpdate();
            });
        }
    }

    /**
     * 部件挂载完毕
     *
     * @protected
     * @memberof TabExpPanel
     */
    protected ctrlMounted(): void {
        if (this.viewparams && this.viewparams.srftabactivate) {
            const activate = this.viewparams.srftabactivate.toLowerCase();
            if (activate && this.isInit[activate] !== undefined) {
                for (const key in this.isInit) {
                    if (this.isInit.hasOwnProperty(key)) {
                        this.isInit[key] = false;
                    }
                }
                this.$nextTick(() => {
                    this.tabPanelClick(activate);
                });
            }
        }
    }

    /**
     * 分页面板选中
     *
     * @protected
     * @param {*} $event
     * @returns
     * @memberof TabExpPanel
     */
    protected tabPanelClick($event: any): void {
        if (!$event) {
            return;
        }
        this.isInit[$event] = true;
        if (!this.viewState) {
            return;
        }
        this.activatedTabViewPanel = $event;
        this.viewState.next({ tag: this.activatedTabViewPanel, action: this.action, data: {} });
    }
}