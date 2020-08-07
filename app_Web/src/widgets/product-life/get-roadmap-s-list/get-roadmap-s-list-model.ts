/**
 * GetRoadmapS 部件模型
 *
 * @export
 * @class GetRoadmapSModel
 */
export default class GetRoadmapSModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof GetRoadmapSList2Mode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'end',
			},
			{
				name: 'marker',
			},
			{
				name: 'year',
			},
			{
				name: 'parent',
			},
			{
				name: 'type',
			},
			{
				name: 'begin',
			},
			{
				name: 'product',
			},
			{
				name: 'branch',
			},
			{
				name: 'productlifename',
			},
			{
				name: 'productlifeid',
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