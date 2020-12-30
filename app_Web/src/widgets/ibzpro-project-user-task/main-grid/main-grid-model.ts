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
          name: 'account',
          prop: 'account',
          dataType: 'TEXT',
        },
        {
          name: 'taskname',
          prop: 'taskname',
          dataType: 'TEXT',
        },
        {
          name: 'tasktype',
          prop: 'tasktype',
          dataType: 'SSCODELIST',
        },
        {
          name: 'consumed',
          prop: 'consumed',
          dataType: 'FLOAT',
        },
        {
          name: 'eststarted',
          prop: 'eststarted',
          dataType: 'DATE',
        },
        {
          name: 'deadline',
          prop: 'deadline',
          dataType: 'DATE',
        },
        {
          name: 'date',
          prop: 'date',
          dataType: 'DATE',
        },
        {
          name: 'progressrate',
          prop: 'progressrate',
          dataType: 'TEXT',
        },
        {
          name: 'delaydays',
          prop: 'delaydays',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'id',
          dataType: 'ACID',
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
          name: 'ibzproprojectusertask',
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