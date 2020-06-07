/**
 * TASKTIME 部件模型
 *
 * @export
 * @class TASKTIMEModel
 */
export default class TASKTIMEModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TASKTIMEDashboard_sysportlet1_chartMode
	 */
	public getDataItems(): any[] {
		return [
			{
			name:'size',
			prop:'size'
			},
			{
			name:'query',
			prop:'query'
			},
			{
			name:'page',
			prop:'page'
			},
			{
			name:'sort',
			prop:'sort'
			}
		]
	}

}