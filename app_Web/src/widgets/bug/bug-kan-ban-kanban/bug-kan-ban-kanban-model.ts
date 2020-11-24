/**
 * BugKanBan 部件模型
 *
 * @export
 * @class BugKanBanModel
 */
export default class BugKanBanModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugKanBanKanbanMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'totask',
				prop: 'totask',
				dataType: 'PICKUP',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'status',
				prop: 'status',
				dataType: 'SSCODELIST',
			},
			{
				name: 'task',
				prop: 'task',
				dataType: 'PICKUP',
			},
			{
				name: 'testtask',
				prop: 'testtask',
				dataType: 'PICKUP',
			},
			{
				name: 'tostory',
				prop: 'tostory',
				dataType: 'PICKUP',
			},
			{
				name: 'severity',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'srfmajortext',
				prop: 'title',
				dataType: 'TEXT',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'duplicatebug',
				prop: 'duplicatebug',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'id',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'assignedto',
				prop: 'assignedto',
				dataType: 'TEXT',
			},
			{
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'title',
				prop: 'title',
				dataType: 'TEXT',
			},
			{
				name: 'pri',
				prop: 'pri',
				dataType: 'NSCODELIST',
			},
			{
				name: 'confirmed',
			},
			{
				name: 'plan',
				prop: 'plan',
				dataType: 'PICKUP',
			},
			{
				name: 'repo',
				prop: 'repo',
				dataType: 'PICKUP',
			},
			{
				name: 'entry',
				prop: 'entry',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'case',
				prop: 'ibizcase',
				dataType: 'PICKUP',
			},
			{
				name: 'delay',
				prop: 'delay',
				dataType: 'TEXT',
			},
			{
				name: 'isfavorites',
			},
			{
				name: 'deadline',
				prop: 'deadline',
				dataType: 'DATE',
			},

			{
				name: 'bug',
				prop: 'id',
				dataType: 'FONTKEY',
			},


      {
        name:'size',
        prop:'size'
      },
      {
        name:'query',
        prop:'query'
      },
      {
        name:'sort',
        prop:'sort'
      },
      {
        name:'page',
        prop:'page'
      },
      {
        name:'srfparentdata',
        prop:'srfparentdata'
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
		]
	}

}