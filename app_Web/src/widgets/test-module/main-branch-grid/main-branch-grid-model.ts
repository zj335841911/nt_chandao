/**
 * MainBranch 部件模型
 *
 * @export
 * @class MainBranchModel
 */
export default class MainBranchModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainBranchGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainBranchGridMode
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
          isEditable:true
        },
        {
          name: 'branch',
          prop: 'branch',
          dataType: 'INT',
          isEditable:true
        },
        {
          name: 'short',
          prop: 'ibizshort',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'testmodule',
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