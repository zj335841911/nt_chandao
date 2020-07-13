/**
 * ProductTrendsTimeline 部件模型
 *
 * @export
 * @class ProductTrendsTimelineModel
 */
export default class ProductTrendsTimelineModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductTrendsTimelineModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'extra',
      },
      {
        name: 'objecttype',
      },
      {
        name: 'action',
        prop: 'id',
      },
      {
        name: 'comment',
      },
      {
        name: 'read',
      },
      {
        name: 'action',
      },
      {
        name: 'date',
      },
      {
        name: 'product',
      },
      {
        name: 'objectid',
      },
      {
        name: 'actor',
      },
      {
        name: 'project',
      },
    ]
  }


}
