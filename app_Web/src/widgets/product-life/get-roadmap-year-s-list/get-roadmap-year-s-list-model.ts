/**
 * GetRoadmapYearS 部件模型
 *
 * @export
 * @class GetRoadmapYearSModel
 */
export default class GetRoadmapYearSModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof GetRoadmapYearSListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'productlifename',
			},
			{
				name: 'parent',
			},
			{
				name: 'marker',
			},
			{
				name: 'productlifeid',
			},
			{
				name: 'end',
			},
			{
				name: 'year',
			},
			{
				name: 'branch',
			},
			{
				name: 'begin',
			},
			{
				name: 'product',
			},
			{
				name: 'type',
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