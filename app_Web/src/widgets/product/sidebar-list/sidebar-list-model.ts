/**
 * Sidebar 部件模型
 *
 * @export
 * @class SidebarModel
 */
export default class SidebarModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof SidebarListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'name',
			},
			{
				name: 'status',
        codelist:{tag:'Product__status',codelistType:'STATIC'},
			},
			{
				name: 'id',
			},
			{
				name: 'code',
			},
			{
				name: 'type',
        codelist:{tag:'Product__type',codelistType:'STATIC'},
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
				name: 'line',
				prop: 'line',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
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
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
		]
	}

}