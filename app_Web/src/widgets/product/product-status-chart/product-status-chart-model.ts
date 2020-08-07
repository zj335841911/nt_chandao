/**
 * ProductStatus 部件模型
 *
 * @export
 * @class ProductStatusModel
 */
export default class ProductStatusModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductStatusDb_productstatusportlet_chartMode
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