/**
 * BurnDown 部件模型
 *
 * @export
 * @class BurnDownModel
 */
export default class BurnDownModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BurnDownDashboard_sysportlet1_chartMode
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