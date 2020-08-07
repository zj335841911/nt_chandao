/**
 * ClassifyByType 部件模型
 *
 * @export
 * @class ClassifyByTypeModel
 */
export default class ClassifyByTypeModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ClassifyByTypeListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'date',
			},
			{
				name: 'actiontype',
				prop: 'action',
				dataType: 'SSCODELIST',
			},
			{
				name: 'actor',
			},
			{
				name: 'product',
			},
			{
				name: 'comment',
			},
			{
				name: 'project',
			},
			{
				name: 'objecttype',
			},
			{
				name: 'extra',
			},
			{
				name: 'objectid',
			},
			{
				name: 'id',
			},
			{
				name: 'actionmanner',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'comment',
				dataType: 'LONGTEXT',
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