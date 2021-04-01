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
        name: 'casestepid',
      },
      {
        name: 'reals',
      },
      {
        name: 'steps',
      },
      {
        name: 'type',
      },
      {
        name: 'casestep',
        prop: 'id',
      },
      {
        name: 'desc',
      },
      {
        name: 'expect',
      },
      {
        name: 'files',
      },
      {
        name: 'runid',
      },
      {
        name: 'version',
      },
      {
        name: 'ibizcase',
      },
      {
        name: 'parent',
      },
    ]
  }

}
// 默认导出
export default MobModel;