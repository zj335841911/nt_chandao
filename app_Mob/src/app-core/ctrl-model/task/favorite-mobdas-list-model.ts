/**
 * FavoriteMOBDas 部件模型
 *
 * @export
 * @class FavoriteMOBDasModel
 */
export class FavoriteMOBDasModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof FavoriteMOBDasDashboard_sysportlet4_listMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'name',
			},
			{
				name: 'left',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'status',
			},
			{
				name: 'pri',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'name',
				dataType: 'TEXT',
			},
			{
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'frombug',
				prop: 'frombug',
				dataType: 'PICKUP',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'task',
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
        name:'page',
        prop:'page'
      }
		]
	}

}
// 默认导出
export default FavoriteMOBDasModel;