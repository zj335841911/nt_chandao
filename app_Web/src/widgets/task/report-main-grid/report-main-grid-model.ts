/**
 * ReportMain 部件模型
 *
 * @export
 * @class ReportMainModel
 */
export default class ReportMainModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ReportMainGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ReportMainGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
        },
        {
          name: 'productname',
          prop: 'productname',
          dataType: 'PICKUPDATA',
        },
        {
          name: 'projectname',
          prop: 'projectname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'status1',
          prop: 'status1',
          dataType: 'SSCODELIST',
        },
        {
          name: 'assignedto',
          prop: 'assignedto',
          dataType: 'TEXT',
        },
        {
          name: 'finishedby',
          prop: 'finishedby',
          dataType: 'SSCODELIST',
        },
        {
          name: 'estimate',
          prop: 'estimate',
          dataType: 'FLOAT',
        },
        {
          name: 'consumed',
          prop: 'consumed',
          dataType: 'FLOAT',
        },
        {
          name: 'left',
          prop: 'left',
          dataType: 'FLOAT',
        },
        {
          name: 'progressrate',
          prop: 'progressrate',
          dataType: 'TEXT',
        },
        {
          name: 'deadline',
          prop: 'deadline',
          dataType: 'DATE',
        },
        {
          name: 'tasktype',
          prop: 'tasktype',
          dataType: 'SSCODELIST',
        },
        {
          name: 'frombug',
          prop: 'frombug',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmstag',
        },
        {
          name: 'srfmajortext',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'id',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'story',
          prop: 'story',
          dataType: 'PICKUP',
        },
        {
          name: 'isfavorites',
          prop: 'isfavorites',
          dataType: 'TEXT',
        },
        {
          name: 'module',
          prop: 'module',
          dataType: 'PICKUP',
        },
        {
          name: 'status',
          prop: 'status',
          dataType: 'SSCODELIST',
        },
        {
          name: 'parent',
          prop: 'parent',
          dataType: 'PICKUP',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
        },
        {
          name: 'color',
          prop: 'color',
          dataType: 'SSCODELIST',
        },
        {
          name: 'task',
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