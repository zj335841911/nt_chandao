import ViewEngine from '../view/view-engine';
import { events } from '@/studio-core/global/events';

/**
 * 快速摘要栏引擎
 *
 * @export
 * @class DataPanelEngine
 * @extends {ViewEngine}
 */
export default class DataPanelEngine extends ViewEngine {

    /**
     * 快捷信息栏部件
     *
     * @protected
     * @type {*}
     * @memberof DataPanelEngine
     */
    protected dataPanel: any = null;

    /**
     * 表单部件
     *
     * @protected
     * @type {*}
     * @memberof DataPanelEngine
     */
    protected form: any = null;

    /**
     * 获取上下文
     *
     * @readonly
     * @protected
     * @type {*}
     * @memberof DataPanelEngine
     */
    protected get context(): any {
        return this.view?.context || {};
    }

    /**
     * 引擎初始化
     *
     * @param {*} [opt={}]
     * @memberof DataPanelEngine
     */
    public init(opt: any = {}): void {
        super.init(opt);
        this.addListener();
        if (opt.form) {
            this.form = opt.form;
        }
        if (opt.datapanel) {
            this.dataPanel = opt.datapanel;
        }
    }

    /**
     * 新增事件监听
     *
     * @protected
     * @memberof DataPanelEngine
     */
    protected addListener(): void {
        if (this.view) {
            this.view.$on(events.view.MODEL_LOADED, () => {
                this.setData();
            });
        }
    }

    /**
     * 向快捷信息栏部件填充数据
     *
     * @memberof DataPanelEngine
     */
    public setData(): void {
        const data = this.view.$appService.contextStore.getContextData(this.context, this.view.appDeName);
        if (this.dataPanel && Object.is(this.dataPanel.controlType, 'FORM')) {
            if (data && data.data) {
                this.dataPanel.fillForm(data.data);
            }
        }
    }

}