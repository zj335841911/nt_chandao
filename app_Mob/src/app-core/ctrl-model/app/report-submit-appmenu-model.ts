/**
 * ReportSubmit 部件模型
 *
 * @export
 * @class ReportSubmitModel
 */
export class ReportSubmitModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ReportSubmitModel
     */
    private items: any[] = [
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ReportSubmitModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ReportSubmitModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ReportSubmitModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ReportSubmitModel;