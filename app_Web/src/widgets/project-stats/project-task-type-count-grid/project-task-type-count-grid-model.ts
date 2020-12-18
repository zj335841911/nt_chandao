/**
 * ProjectTaskTypeCount 部件模型
 *
 * @export
 * @class ProjectTaskTypeCountModel
 */
export default class ProjectTaskTypeCountModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectTaskTypeCountGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectTaskTypeCountGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'designtakcnt',
          prop: 'designtakcnt',
          dataType: 'INT',
        },
        {
          name: 'develtakcnt',
          prop: 'develtakcnt',
          dataType: 'INT',
        },
        {
          name: 'testtakcnt',
          prop: 'testtakcnt',
          dataType: 'INT',
        },
        {
          name: 'studytakcnt',
          prop: 'studytakcnt',
          dataType: 'INT',
        },
        {
          name: 'discusstakcnt',
          prop: 'discusstakcnt',
          dataType: 'INT',
        },
        {
          name: 'uitakcnt',
          prop: 'uitakcnt',
          dataType: 'INT',
        },
        {
          name: 'affairtakcnt',
          prop: 'affairtakcnt',
          dataType: 'INT',
        },
        {
          name: 'servetakcnt',
          prop: 'servetakcnt',
          dataType: 'INT',
        },
        {
          name: 'misctakcnt',
          prop: 'misctakcnt',
          dataType: 'INT',
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
          name: 'projectstats',
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