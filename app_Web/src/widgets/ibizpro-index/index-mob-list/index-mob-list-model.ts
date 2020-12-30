/**
 * IndexMob 部件模型
 *
 * @export
 * @class IndexMobModel
 */
export default class IndexMobModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof IndexMobListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'mdeptid',
			},
			{
				name: 'orgid',
			},
			{
				name: 'color',
			},
			{
				name: 'indexid',
			},
			{
				name: 'indextype',
				prop: 'indextype',
				dataType: 'SSCODELIST',
        codelist:{tag:'IndexType',codelistType:'STATIC'},
			},
			{
				name: 'indexdesc',
			},
			{
				name: 'indexname',
			},
			{
				name: 'srfkey',
				prop: 'indexid',
				dataType: 'INT',
			},
			{
				name: 'srfmajortext',
				prop: 'indexname',
				dataType: 'TEXT',
			},
			{
				name: 'srfdatatype',
				prop: 'indextype',
				dataType: 'SSCODELIST',
        codelist:{tag:'IndexType',codelistType:'STATIC'},
			},
			{
				name: 'index_type',
				prop: 'indextype',
				dataType: 'SSCODELIST',
        codelist:{tag:'IndexType',codelistType:'STATIC'},
			},
			{
				name: 'ibizproindex',
				prop: 'indexid',
				dataType: 'FONTKEY',
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
        name:'sort',
        prop:'sort'
      },
      {
        name:'page',
        prop:'page'
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