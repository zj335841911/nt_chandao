/**
 * MyWork 部件模型
 *
 * @export
 * @class MyWorkModel
 */
export class MyWorkModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyWorkMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'projects',
			},
			{
				name: 'mybugs',
			},
			{
				name: 'myebugs',
			},
			{
				name: 'myetasks',
			},
			{
				name: 'mystorys',
			},
			{
				name: 'eprojects',
			},
			{
				name: 'realname',
			},
			{
				name: 'mytasks',
			},
			{
				name: 'products',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'realname',
				dataType: 'TEXT',
			},
			{
				name: 'ibzmyterritory',
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
export default MyWorkModel;