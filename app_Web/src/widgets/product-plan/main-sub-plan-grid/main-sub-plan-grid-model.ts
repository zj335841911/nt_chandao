/**
 * MainSubPlan 部件模型
 *
 * @export
 * @class MainSubPlanModel
 */
export default class MainSubPlanModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainSubPlanGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainSubPlanGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
        },
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'title',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'parent',
          prop: 'parent',
          dataType: 'PICKUP',
        },
        {
          name: 'branch',
          prop: 'branch',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmajortext',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'end',
          prop: 'end',
          dataType: 'DATE',
        },
        {
          name: 'begin',
          prop: 'begin',
          dataType: 'DATE',
        },
        {
          name: 'productplan',
          prop: 'id',
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
        {
          name:'sort',
          prop:'sort'
        },
        {
          name:'srfparentdata',
          prop:'srfparentdata'
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

}