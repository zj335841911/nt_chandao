/**
 * MySubmit 部件模型
 *
 * @export
 * @class MySubmitModel
 */
export class MySubmitModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MySubmitMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'worktoday',
			},
			{
				name: 'ibz_dailyid',
			},
			{
				name: 'issubmit',
			},
			{
				name: 'reportstatus',
			},
			{
				name: 'type',
			},
			{
				name: 'comment',
			},
			{
				name: 'account',
			},
			{
				name: 'planstomorrow',
			},
			{
				name: 'ibz_dailyname',
			},
			{
				name: 'date',
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
export default MySubmitModel;