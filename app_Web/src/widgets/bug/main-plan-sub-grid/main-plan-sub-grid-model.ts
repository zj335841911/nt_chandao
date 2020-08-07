/**
 * Main_PlanSub 部件模型
 *
 * @export
 * @class Main_PlanSubModel
 */
export default class Main_PlanSubModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof Main_PlanSubGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Main_PlanSubGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'tostory',
          prop: 'tostory',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmstag',
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
          isEditable:true
        },
        {
          name: 'openedby',
          prop: 'openedby',
          dataType: 'SSCODELIST',
        },
        {
          name: 'duplicatebug',
          prop: 'duplicatebug',
          dataType: 'PICKUP',
        },
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'assignedto',
          prop: 'assignedto',
          dataType: 'TEXT',
        },
        {
          name: 'story',
          prop: 'story',
          dataType: 'PICKUP',
        },
        {
          name: 'title',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'confirmed',
          prop: 'confirmed',
          dataType: 'NSCODELIST',
        },
        {
          name: 'repo',
          prop: 'repo',
          dataType: 'PICKUP',
        },
        {
          name: 'totask',
          prop: 'totask',
          dataType: 'PICKUP',
        },
        {
          name: 'module',
          prop: 'module',
          dataType: 'PICKUP',
        },
        {
          name: 'openeddate',
          prop: 'openeddate',
          dataType: 'DATETIME',
        },
        {
          name: 'status',
          prop: 'status',
          dataType: 'SSCODELIST',
        },
        {
          name: 'task',
          prop: 'task',
          dataType: 'PICKUP',
        },
        {
          name: 'testtask',
          prop: 'testtask',
          dataType: 'PICKUP',
        },
        {
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
        },
        {
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
        },
        {
          name: 'plan',
          prop: 'plan',
          dataType: 'PICKUP',
        },
        {
          name: 'entry',
          prop: 'entry',
          dataType: 'PICKUP',
        },
        {
          name: 'branch',
          prop: 'branch',
          dataType: 'PICKUP',
        },
        {
          name: 'case',
          prop: 'ibizcase',
          dataType: 'PICKUP',
        },
        {
          name: 'bug',
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
          name:'filter',
          prop:'filter'
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