/**
 * TaskKanBan 部件模型
 *
 * @export
 * @class TaskKanBanModel
 */
export default class TaskKanBanModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TaskKanBanKanbanMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'desc',
				prop: 'desc',
				dataType: 'LONGTEXT',
			},
			{
				name: 'status',
				prop: 'status',
				dataType: 'SSCODELIST',
			},
			{
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'type',
				prop: 'type',
				dataType: 'SSCODELIST',
			},
			{
				name: 'estimate',
				prop: 'estimate',
				dataType: 'FLOAT',
			},
			{
				name: 'srfmajortext',
				prop: 'name',
				dataType: 'TEXT',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'mailto',
				prop: 'mailto',
				dataType: 'LONGTEXT',
			},
			{
				name: 'assignedto',
				prop: 'assignedto',
				dataType: 'TEXT',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'pri',
				prop: 'pri',
				dataType: 'NSCODELIST',
			},
			{
				name: 'consumed',
				prop: 'consumed',
				dataType: 'FLOAT',
			},
			{
				name: 'color',
				prop: 'color',
				dataType: 'SSCODELIST',
			},
			{
				name: 'name',
				prop: 'name',
				dataType: 'TEXT',
			},
			{
				name: 'eststarted',
				prop: 'eststarted',
				dataType: 'DATE',
			},
			{
				name: 'deadline',
				prop: 'deadline',
				dataType: 'DATE',
			},

			{
				name: 'task',
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