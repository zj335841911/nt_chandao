/**
 * MyWeekly 部件模型
 *
 * @export
 * @class MyWeeklyModel
 */
export class MyWeeklyModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyWeeklyMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'issubmit',
			},
			{
				name: 'date',
			},
			{
				name: 'account',
			},
			{
				name: 'ibz_weeklyname',
			},
			{
				name: 'ibz_weeklyid',
			},
			{
				name: 'submittime',
			},
			{
				name: 'reportto',
			},
			{
				name: 'mailto',
			},
			{
				name: 'worktoday',
				prop: 'workthisweek',
				dataType: 'HTMLTEXT',
			},
			{
				name: 'planstomorrow',
				prop: 'plannextweek',
				dataType: 'HTMLTEXT',
			},
			{
				name: 'reportstatus',
			},
			{
				name: 'srfkey',
				prop: 'ibzweeklyid',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'ibzweeklyname',
				dataType: 'TEXT',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'ibzweekly',
				prop: 'ibzweeklyid',
				dataType: 'FONTKEY',
			},
			{
				name: 'size',
				prop: 'size'
			},
			{
				name: 'query',
				prop: 'query'
			},
			{
				name: 'page',
				prop: 'page'
			},
			{
				name: 'sort',
				prop: 'sort'
			},
			{
				name: 'srfparentdata',
				prop: 'srfparentdata'
			},
            // 工作流使用
			{
				name: 'processDefinitionKey',
				prop: 'processDefinitionKey',
			},
			{
				name: 'userTaskId',
				prop: 'userTaskId',
			},
		];
	}

}
// 默认导出
export default MyWeeklyModel;