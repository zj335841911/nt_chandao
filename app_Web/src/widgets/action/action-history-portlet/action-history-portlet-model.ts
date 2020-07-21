/**
 * ActionHistory 部件模型
 *
 * @export
 * @class ActionHistoryModel
 */
export default class ActionHistoryModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ActionHistoryModel
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
    ]
  }


}
