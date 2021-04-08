/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export class MainModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'estimate',
      },
      {
        name: 'username',
      },
      {
        name: 'join',
      },
      {
        name: 'hours',
      },
      {
        name: 'account',
      },
      {
        name: 'order',
      },
      {
        name: 'left',
      },
      {
        name: 'consumed',
      },
      {
        name: 'limited',
      },
      {
        name: 'role',
      },
      {
        name: 'ibztaskteam',
        prop: 'id',
      },
      {
        name: 'days',
      },
      {
        name: 'total',
      },
      {
        name: 'type',
      },
      {
        name: 'root',
      },
      {
        name: 'task',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default MainModel;