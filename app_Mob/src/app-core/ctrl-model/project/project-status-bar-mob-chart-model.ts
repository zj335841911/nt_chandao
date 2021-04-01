/**
 * ProjectStatusBarMob 部件模型
 *
 * @export
 * @class ProjectStatusBarMobModel
 */
export class ProjectStatusBarMobModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectStatusBarMobChartMode
	 */
	public getDataItems(): any[] {
		return [
      {
        name:'query',
        prop:'query'
      },
		]
	}

}
// 默认导出
export default ProjectStatusBarMobModel;