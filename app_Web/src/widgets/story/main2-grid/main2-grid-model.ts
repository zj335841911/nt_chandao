/**
 * Main2 部件模型
 *
 * @export
 * @class Main2Model
 */
export default class Main2Model {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof Main2GridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Main2GridMode
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
          name: 'frombug',
          prop: 'frombug',
          dataType: 'PICKUP',
        },
        {
          name: 'parent',
          prop: 'parent',
          dataType: 'PICKUP',
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
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'tobug',
          prop: 'tobug',
          dataType: 'PICKUP',
        },
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
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
          name: 'title',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'duplicatestory',
          prop: 'duplicatestory',
          dataType: 'PICKUP',
        },
        {
          name: 'branch',
          prop: 'branch',
          dataType: 'PICKUP',
        },
        {
          name: 'story',
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