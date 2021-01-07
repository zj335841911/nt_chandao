/**
 * ProjectTeamPc 部件模型
 *
 * @export
 * @class ProjectTeamPcModel
 */
export default class ProjectTeamPcModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectTeamPcListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'role',
			},
			{
				name: 'left',
			},
			{
				name: 'total',
			},
			{
				name: 'consumed',
			},
			{
				name: 'id',
			},
			{
				name: 'join',
			},
			{
				name: 'hours',
			},
			{
				name: 'estimate',
			},
			{
				name: 'type',
        codelist:{tag:'Team__type',codelistType:'STATIC'},
			},
			{
				name: 'account',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
			},
			{
				name: 'days',
			},
			{
				name: 'root',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'account',
				dataType: 'TEXT',
			},
			{
				name: 'projectteam',
				prop: 'id',
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