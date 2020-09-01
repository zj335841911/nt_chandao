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
        name: 'join',
      },
      {
        name: 'account',
      },
      {
        name: 'hours',
      },
      {
        name: 'left',
      },
      {
        name: 'days',
      },
      {
        name: 'projectteam',
        prop: 'id',
      },
      {
        name: 'consumed',
      },
      {
        name: 'order',
      },
      {
        name: 'estimate',
      },
      {
        name: 'limited',
      },
      {
        name: 'role',
      },
      {
        name: 'type',
      },
      {
        name: 'total',
      },
      {
        name: 'root',
      },
      {
        name: 'username',
      },
      {
        name: 'project',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default MobModel;