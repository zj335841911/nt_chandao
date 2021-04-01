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
        name: 'role',
      },
      {
        name: 'limited',
      },
      {
        name: 'total',
      },
      {
        name: 'username',
      },
      {
        name: 'days',
      },
      {
        name: 'exitdate',
      },
      {
        name: 'type',
      },
      {
        name: 'order',
      },
      {
        name: 'projectteam',
        prop: 'id',
      },
      {
        name: 'consumed',
      },
      {
        name: 'account',
      },
      {
        name: 'estimate',
      },
      {
        name: 'join',
      },
      {
        name: 'hours',
      },
      {
        name: 'taskcnt',
      },
      {
        name: 'left',
      },
      {
        name: 'pm',
      },
      {
        name: 'projectname',
      },
      {
        name: 'root',
      },
    ]
  }

}
// 默认导出
export default MobModel;