/**
 * MyRe 部件模型
 *
 * @export
 * @class MyReModel
 */
export class MyReModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyReMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'planstomorrow',
			},
			{
				name: 'ibz_dailyid',
			},
			{
				name: 'date',
			},
			{
				name: 'account',
			},
			{
				name: 'comment',
			},
			{
				name: 'ibz_dailyname',
			},
			{
				name: 'type',
			},
			{
				name: 'reportstatus',
			},
			{
				name: 'issubmit',
			},
			{
				name: 'worktoday',
			},
			{
				name: 'srfkey',
				prop: 'ibzdailyid',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'ibzdailyname',
				dataType: 'TEXT',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'ibzreport',
				prop: 'ibzdailyid',
				dataType: 'FONTKEY',
			},
            {
                name: 'n_type_eq',
                prop: 'n_type_eq', 
                dataType: 'SSCODELIST',
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
export default MyReModel;