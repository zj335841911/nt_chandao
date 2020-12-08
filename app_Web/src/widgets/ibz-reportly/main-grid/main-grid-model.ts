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
          name: 'ibz_reportlyid',
          prop: 'ibzreportlyid',
          dataType: 'ACID',
        },
        {
          name: 'ibz_reportlyname',
          prop: 'ibzreportlyname',
          dataType: 'TEXT',
        },
        {
          name: 'reportto',
          prop: 'reportto',
          dataType: 'SSCODELIST',
        },
        {
          name: 'date',
          prop: 'date',
          dataType: 'DATE',
        },
        {
          name: 'srfmajortext',
          prop: 'ibzreportlyname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibzreportlyid',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'ibzreportlyid',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'ibzreportly',
          prop: 'ibzreportlyid',
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