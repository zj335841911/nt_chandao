/**
 * MobList 部件模型
 *
 * @export
 * @class MobListModel
 */
export class MobListModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MobListMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'date',
				prop: 'addeddate',
				dataType: 'DATETIME',
			},
			{
				name: 'url',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'title',
				prop: 'title',
				dataType: 'TEXT',
			},
			{
				name: 'addedby',
			},
			{
				name: 'size',
				prop: 'strsize',
				dataType: 'TEXT',
			},
			{
				name: 'extension',
			},
			{
				name: 'strsize',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'title',
				dataType: 'TEXT',
			},
			{
				name: 'file',
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
export default MobListModel;