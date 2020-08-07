/**
 * GetRoadmap 部件模型
 *
 * @export
 * @class GetRoadmapModel
 */
export default class GetRoadmapModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof GetRoadmapList2Mode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'product',
			},
			{
				name: 'year',
			},
			{
				name: 'parent',
			},
			{
				name: 'productlifeid',
			},
			{
				name: 'type',
			},
			{
				name: 'end',
			},
			{
				name: 'begin',
			},
			{
				name: 'marker',
			},
			{
				name: 'branch',
			},
			{
				name: 'productlifename',
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