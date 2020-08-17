/**
 * MainR 部件模型
 *
 * @export
 * @class MainRModel
 */
export default class MainRModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainRGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainRGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'files',
          prop: 'files',
          dataType: 'TEXT',
        },
        {
          name: 'desc',
          prop: 'desc',
          dataType: 'LONGTEXT',
        },
        {
          name: 'parent',
          prop: 'parent',
          dataType: 'PICKUP',
        },
        {
          name: 'steps',
          prop: 'steps',
          dataType: 'SSCODELIST',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'srfmajortext',
          prop: 'expect',
          dataType: 'LONGTEXT',
        },
        {
          name: 'reals',
          prop: 'reals',
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
          name: 'version',
          prop: 'version',
          dataType: 'PICKUPDATA',
        },
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'expect',
          prop: 'expect',
          dataType: 'LONGTEXT',
        },
        {
          name: 'case',
          prop: 'ibizcase',
          dataType: 'PICKUP',
        },
        {
          name: 'case',
          prop: 'ibizcase',
          dataType: 'FONTKEY',
        },
        {
          name: 'casestep',
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