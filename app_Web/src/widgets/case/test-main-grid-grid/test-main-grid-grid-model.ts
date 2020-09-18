/**
 * TestMainGrid 部件模型
 *
 * @export
 * @class TestMainGridModel
 */
export default class TestMainGridModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof TestMainGridGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TestMainGridGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'resultcnt',
          prop: 'resultcnt',
          dataType: 'INT',
        },
        {
          name: 'frombug',
          prop: 'frombug',
          dataType: 'PICKUP',
        },
        {
          name: 'status1',
          prop: 'status1',
          dataType: 'SSCODELIST',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
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
          name: 'openedby',
          prop: 'openedby',
          dataType: 'TEXT',
        },
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'assignedto',
          prop: 'assignedto',
          dataType: 'SSCODELIST',
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
          name: 'casesteps',
          prop: 'casesteps',
          dataType: 'ONE2MANYDATA',
        },
        {
          name: 'fromcaseid',
          prop: 'fromcaseid',
          dataType: 'PICKUP',
        },
        {
          name: 'lastrundate',
          prop: 'lastrundate',
          dataType: 'DATETIME',
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
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
        },
        {
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
        },
        {
          name: 'lastrunresult1',
          prop: 'lastrunresult1',
          dataType: 'SSCODELIST',
        },
        {
          name: 'lib',
          prop: 'lib',
          dataType: 'PICKUP',
        },
        {
          name: 'lastrunresult',
          prop: 'lastrunresult',
          dataType: 'SSCODELIST',
        },
        {
          name: 'branch',
          prop: 'branch',
          dataType: 'PICKUP',
        },
        {
          name: 'tobugcnt',
          prop: 'tobugcnt',
          dataType: 'INT',
        },
        {
          name: 'lastrunner',
          prop: 'lastrunner',
          dataType: 'TEXT',
        },
        {
          name: 'case',
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