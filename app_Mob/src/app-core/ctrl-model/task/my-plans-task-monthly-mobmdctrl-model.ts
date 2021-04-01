/**
 * MyPlansTaskMonthly 部件模型
 *
 * @export
 * @class MyPlansTaskMonthlyModel
 */
export class MyPlansTaskMonthlyModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyPlansTaskMonthlyMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'deadline',
			},
			{
				name: 'status',
			},
			{
				name: 'estimate',
			},
			{
				name: 'pri',
			},
			{
				name: 'id',
			},
			{
				name: 'finishedby',
			},
			{
				name: 'consumed',
			},
			{
				name: 'left',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'productname',
			},
			{
				name: 'name',
			},
			{
				name: 'projectname',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'name',
				dataType: 'TEXT',
			},
			{
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'plan',
				prop: 'plan',
				dataType: 'PICKUP',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'frombug',
				prop: 'frombug',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'task',
				prop: 'id',
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
export default MyPlansTaskMonthlyModel;