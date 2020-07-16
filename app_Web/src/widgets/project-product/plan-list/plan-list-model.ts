/**
 * Plan 部件模型
 *
 * @export
 * @class PlanModel
 */
export default class PlanModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof PlanListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'srfmajortext',
				prop: 'planname',
				dataType: 'PICKUPTEXT',
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