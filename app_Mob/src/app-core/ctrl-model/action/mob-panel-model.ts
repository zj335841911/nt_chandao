/**
 * Mob 部件模型
 *
 * @export
 * @class MobModel
 */
export class MobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobModel
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
      {
        name: 'isactorss',
      },
      {
        name: 'date1',
      },
    ]
  }

}
// 默认导出
export default MobModel;