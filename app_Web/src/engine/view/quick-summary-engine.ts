import ViewEngine from './view-engine';

/**
 * 快速摘要栏引擎
 *
 * @export
 * @class QuickSummaryEngine
 * @extends {ViewEngine}
 */
export class QuickSummaryEngine extends ViewEngine {

    /**
     * 快捷信息栏部件
     *
     * @protected
     * @type {*}
     * @memberof QuickSummaryEngine
     */
    protected quickSummary: any = null;

    /**
     * 表单部件
     *
     * @protected
     * @type {*}
     * @memberof QuickSummaryEngine
     */
    protected form: any = null;

    /**
     * 获取上下文
     *
     * @readonly
     * @protected
     * @type {*}
     * @memberof QuickSummaryEngine
     */
    protected get context(): any {
        return this.view?.context || {};
    }

    /**
     * 引擎初始化
     *
     * @param {*} [opt={}]
     * @memberof QuickSummaryEngine
     */
    public init(opt: any = {}): void {
        super.init(opt);
        if (opt.form) {
            this.form = opt.form;
        }
        if (opt.quicksummary) {
            this.quickSummary = opt.quicksummary;
        }
    }

    /**
     * 向快捷信息栏部件填充数据
     *
     * @memberof QuickSummaryEngine
     */
    public setData(): void {
        const data = this.view.$appService.contextStore.getContextData(this.context, this.view.appDeName);
        if (this.quickSummary && Object.is(this.quickSummary.controlType, 'FORM')) {
            if (data && data.data) {
                this.quickSummary.fillForm(data.data);
            }
        }
    }

}