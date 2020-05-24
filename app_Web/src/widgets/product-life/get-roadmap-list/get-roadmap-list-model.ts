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
	 * @memberof GetRoadmapListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'ibz_productlifeid',
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
        codelist:{tag:'YesNo3',codelistType:'STATIC'},
			},
			{
				name: 'ibz_productlifename',
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