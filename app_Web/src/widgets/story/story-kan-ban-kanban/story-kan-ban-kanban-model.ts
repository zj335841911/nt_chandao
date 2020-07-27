/**
 * StoryKanBan 部件模型
 *
 * @export
 * @class StoryKanBanModel
 */
export default class StoryKanBanModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof StoryKanBanKanbanMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'id',
			},
			{
				name: 'title',
				prop: 'title',
				dataType: 'TEXT',
			},
			{
				name: 'status',
			},
			{
				name: 'estimate',
			},
			{
				name: 'stage',
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
				name: 'story',
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