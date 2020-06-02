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
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'phone',
          prop: 'phone',
          dataType: 'TEXT',
        },
        {
          name: 'last',
          prop: 'last',
          dataType: 'INT',
        },
        {
          name: 'email',
          prop: 'email',
          dataType: 'TEXT',
        },
        {
          name: 'gender',
          prop: 'gender',
          dataType: 'SSCODELIST',
        },
        {
          name: 'account',
          prop: 'account',
          dataType: 'TEXT',
        },
        {
          name: 'realname',
          prop: 'realname',
          dataType: 'TEXT',
        },
        {
          name: 'visits',
          prop: 'visits',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'realname',
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
          name: 'qq',
          prop: 'qq',
          dataType: 'TEXT',
        },
        {
          name: 'user',
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