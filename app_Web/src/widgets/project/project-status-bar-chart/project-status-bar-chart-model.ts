/**
 * ProjectStatusBar 部件模型
 *
 * @export
 * @class ProjectStatusBarModel
 */
export default class ProjectStatusBarModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectStatusBarDb_sysportlet4_chartMode
	 */
	public getDataItems(): any[] {
		return [
      {
        name:'query',
        prop:'query'
      },
		]
	}

}