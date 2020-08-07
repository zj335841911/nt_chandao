/**
 * ProjectTrendsTimeline 部件模型
 *
 * @export
 * @class ProjectTrendsTimelineModel
 */
export default class ProjectTrendsTimelineModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProjectTrendsTimelineModel
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
      {
        name: 'lastcomment',
      },
      {
        name: 'actionmanner',
      },
    ]
  }


}