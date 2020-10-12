/**
 * MonthOpenedBugAndCase 部件模型
 *
 * @export
 * @class MonthOpenedBugAndCaseModel
 */
export default class MonthOpenedBugAndCaseModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MonthOpenedBugAndCaseChartMode
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