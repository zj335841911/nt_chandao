/**
 * AssMobDASHBOARD 部件模型
 *
 * @export
 * @class AssMobDASHBOARDModel
 */
export class AssMobDASHBOARDModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof AssMobDASHBOARDMdctrlModel
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'pri',
			},
			{
				name: 'projectname',
			},
			{
				name: 'status',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'name',
			},
			{
				name: 'left',
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
                name: 'n_name_like',
                prop: 'n_name_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_type_eq',
                prop: 'n_type_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_status_eq',
                prop: 'n_status_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_projectname_eq',
                prop: 'n_projectname_eq', 
                dataType: 'PICKUPTEXT',
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
export default AssMobDASHBOARDModel;