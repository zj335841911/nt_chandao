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
				name: 'project',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'module',
			},
			{
				name: 'status',
				prop: 'status',
				dataType: 'SSCODELIST',
			},
			{
				name: 'name',
			},
			{
				name: 'type',
			},
			{
				name: 'estimate',
			},
			{
				name: 'deadline',
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