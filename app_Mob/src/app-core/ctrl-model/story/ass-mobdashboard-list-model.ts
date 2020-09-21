/**
 * AssMOBDASHBOARD 部件模型
 *
 * @export
 * @class AssMOBDASHBOARDModel
 */
export class AssMOBDASHBOARDModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof AssMOBDASHBOARDPortlet_MyStoryMob_listMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'status',
			},
			{
				name: 'stage',
			},
			{
				name: 'isfavorites',
			},
			{
				name: 'title',
			},
			{
				name: 'pri',
			},
			{
				name: 'assignedto',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'title',
				dataType: 'TEXT',
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
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
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
				name: 'tobug',
				prop: 'tobug',
				dataType: 'PICKUP',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'story',
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
export default AssMOBDASHBOARDModel;