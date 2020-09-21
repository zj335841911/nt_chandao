/**
 * Mob_3817 部件模型
 *
 * @export
 * @class Mob_3817Model
 */
export class Mob_3817Model {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Mob_3817MdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'assignedto',
			},
			{
				name: 'pri',
			},
			{
				name: 'status',
			},
			{
				name: 'isfavorites',
			},
			{
				name: 'title',
			},
			{
				name: 'stage',
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
				name: 'frombug',
				prop: 'frombug',
				dataType: 'PICKUP',
			},
			{
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'duplicatestory',
				prop: 'duplicatestory',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'tobug',
				prop: 'tobug',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'story',
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
export default Mob_3817Model;