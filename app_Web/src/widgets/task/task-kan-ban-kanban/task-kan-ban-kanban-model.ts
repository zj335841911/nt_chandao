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
			},
			{
				name: 'desc',
			},
			{
				name: 'status',
				prop: 'status',
				dataType: 'SSCODELIST',
			},
			{
				name: 'parent',
			},
			{
				name: 'type',
			},
			{
				name: 'estimate',
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
			},
			{
				name: 'assignedto',
			},
			{
				name: 'story',
			},
			{
				name: 'project',
			},
			{
				name: 'pri',
			},
			{
				name: 'consumed',
			},
			{
				name: 'color',
			},
			{
				name: 'name',
			},
			{
				name: 'eststarted',
			},
			{
				name: 'deadline',
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