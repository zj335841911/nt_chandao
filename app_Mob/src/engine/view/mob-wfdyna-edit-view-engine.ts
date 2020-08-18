import EditViewEngine from './mob-edit-view-engine';

/**
 * 实体移动端工作流动态编辑视图引擎基础
 *
 * @export
 * @class WFDynaEditViewEngine
 * @extends {EditViewEngine}
 */
export default class WFDynaEditViewEngine extends EditViewEngine {

    /**
     * Creates an instance of WFDynaEditViewEngine.
     * @memberof WFDynaEditViewEngine
     */
    constructor() {
        super();
    }
    
    /**
     * 表单加载完成
     *
     * @param {*} args
     * @memberof WFDynaEditViewEngine
     */
    public onFormLoad(arg: any): void {
        super.onFormLoad(arg);
        this.view.getWFLinkModel();
    }
}