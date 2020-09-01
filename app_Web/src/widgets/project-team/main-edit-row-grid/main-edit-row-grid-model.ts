/**
 * Main_EditRow 部件模型
 *
 * @export
 * @class Main_EditRowModel
 */
export default class Main_EditRowModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof Main_EditRowGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Main_EditRowGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'limited',
          prop: 'limited',
          dataType: 'SSCODELIST',
          isEditable:true
        },
        {
          name: 'username',
          prop: 'username',
          dataType: 'TEXT',
        },
        {
          name: 'days',
          prop: 'days',
          dataType: 'INT',
          isEditable:true
        },
        {
          name: 'root',
          prop: 'root',
          dataType: 'PICKUP',
        },
        {
          name: 'hours',
          prop: 'hours',
          dataType: 'FLOAT',
          isEditable:true
        },
        {
          name: 'account_text',
          prop: 'account',
          dataType: 'TEXT',
        },
        {
          name: 'role',
          prop: 'role',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'account',
          prop: 'account',
          dataType: 'TEXT',
          isEditable:true
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
          isEditable:true
        },
        {
          name: 'projectteam',
          prop: 'id',
        },
      {
        name: 'n_dept_eq',
        prop: 'n_dept_eq',
        dataType: 'SSCODELIST',
      },
      {
        name: 'n_managemembers_eq',
        prop: 'n_managemembers_eq',
        dataType: 'SSCODELIST',
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