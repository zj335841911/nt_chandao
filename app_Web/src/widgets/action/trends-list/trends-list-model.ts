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
				name: 'actionmanner',
        codelist:{tag:'ActionManner',codelistType:'STATIC'},
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
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
			},
			{
				name: 'date1',
			},
			{
				name: 'project',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
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
				name: 'action',
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