/**
 * Trends 部件模型
 *
 * @export
 * @class TrendsModel
 */
export default class TrendsModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TrendsListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'read',
        codelist:{tag:'Action__read',codelistType:'STATIC'},
			},
			{
				name: 'id',
			},
			{
				name: 'action',
			},
			{
				name: 'product',
			},
			{
				name: 'actor',
			},
			{
				name: 'project',
			},
			{
				name: 'objectid',
			},
			{
				name: 'date',
			},
			{
				name: 'objecttype',
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