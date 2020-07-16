/**
 * MainEditRow 部件模型
 *
 * @export
 * @class MainEditRowModel
 */
export default class MainEditRowModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainEditRowGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainEditRowGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'root',
          prop: 'root',
          dataType: 'PICKUP',
        },
        {
          name: 'account_text',
          prop: 'account',
          dataType: 'TEXT',
        },
        {
          name: 'account',
          prop: 'account',
          dataType: 'TEXT',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'estimate',
          prop: 'estimate',
          dataType: 'DECIMAL',
        },
        {
          name: 'srfmajortext',
          prop: 'account',
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
        },
        {
          name: 'ibztaskteam',
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
        {
          name:'srfArray',
          prop:'srfArray'
        },
      ]
    }
  }

}