/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export default class MainModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'module',
          prop: 'module',
          dataType: 'PICKUP',
        },
        {
          name: 'finishedby',
          prop: 'finishedby',
          dataType: 'TEXT',
        },
        {
          name: 'frombug',
          prop: 'frombug',
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
          name: 'estimate',
          prop: 'estimate',
          dataType: 'FLOAT',
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
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'story',
          prop: 'story',
          dataType: 'PICKUP',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
        },
        {
          name: 'assignedto',
          prop: 'assignedto',
          dataType: 'TEXT',
        },
        {
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
        },
        {
          name: 'consumed',
          prop: 'consumed',
          dataType: 'FLOAT',
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'left',
          prop: 'left',
          dataType: 'FLOAT',
        },
        {
          name: 'deadline',
          prop: 'deadline',
          dataType: 'DATE',
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