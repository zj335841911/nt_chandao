/**
 * Test 部件模型
 *
 * @export
 * @class TestModel
 */
export default class TestModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof TestGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TestGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'linename',
          prop: 'linename',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'status',
          prop: 'status',
          dataType: 'SSCODELIST',
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'line',
          prop: 'line',
          dataType: 'PICKUP',
        },
        {
          name: 'code',
          prop: 'code',
          dataType: 'TEXT',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
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
        },
        {
          name: 'product',
          prop: 'id',
        },
      {
        name: 'n_acl_eq',
        prop: 'n_acl_eq',
        dataType: 'SSCODELIST',
      },
      {
        name: 'n_line_eq',
        prop: 'n_line_eq',
        dataType: 'PICKUP',
      },
      {
        name: 'n_linename_like',
        prop: 'n_linename_like',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'n_linename_eq',
        prop: 'n_linename_eq',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'n_name_like',
        prop: 'n_name_like',
        dataType: 'TEXT',
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