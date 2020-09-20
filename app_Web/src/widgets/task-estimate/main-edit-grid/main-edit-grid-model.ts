/**
 * MainEdit 部件模型
 *
 * @export
 * @class MainEditModel
 */
export default class MainEditModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainEditGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainEditGridMode
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
          name: 'dates',
          prop: 'dates',
          dataType: 'DATE',
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
          name: 'work',
          prop: 'work',
          dataType: 'LONGTEXT',
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
          name: 'task',
          prop: 'task',
          dataType: 'FONTKEY',
        },
        {
          name: 'taskestimate',
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