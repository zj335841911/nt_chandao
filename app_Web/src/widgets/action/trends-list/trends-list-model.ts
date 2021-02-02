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
				name: 'action',
			},
			{
				name: 'date1',
			},
			{
				name: 'id',
			},
			{
				name: 'srfkey',
			},
			{
				name: 'project',
			},
			{
				name: 'date',
			},
			{
				name: 'objecttype',
			},
			{
				name: 'objectid',
			},
			{
				name: 'actor',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
			},
			{
				name: 'read',
        codelist:{tag:'Action__read',codelistType:'STATIC'},
			},
			{
				name: 'product',
			},
			{
				name: 'actionmanner',
        codelist:{tag:'ActionManner',codelistType:'STATIC'},
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