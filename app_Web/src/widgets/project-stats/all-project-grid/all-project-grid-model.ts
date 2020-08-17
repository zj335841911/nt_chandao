/**
 * AllProject 部件模型
 *
 * @export
 * @class AllProjectModel
 */
export default class AllProjectModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof AllProjectGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof AllProjectGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'totalleft',
          prop: 'totalleft',
          dataType: 'FLOAT',
        },
        {
          name: 'status',
          prop: 'status',
          dataType: 'TEXT',
        },
        {
          name: 'totalconsumed',
          prop: 'totalconsumed',
          dataType: 'FLOAT',
        },
        {
          name: 'totalestimate',
          prop: 'totalestimate',
          dataType: 'FLOAT',
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'srfmajortext',
          prop: 'name',
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
          name: 'end',
          prop: 'end',
          dataType: 'DATE',
        },
        {
          name: 'totalwh',
          prop: 'totalwh',
          dataType: 'INT',
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