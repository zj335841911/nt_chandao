/**
 * MobTabExpViewtabviewpanel 部件模型
 *
 * @export
 * @class MobTabExpViewtabviewpanelModel
 */
export class MobTabExpViewtabviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobTabExpViewtabviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'type',
      },
      {
        name: 'createman',
      },
      {
        name: 'ibzfavorites',
        prop: 'ibzfavoritesid',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updateman',
      },
      {
        name: 'objectid',
      },
      {
        name: 'account',
      },
      {
        name: 'ibzfavoritesname',
      },
      {
        name: 'updatedate',
      },
    ]
  }

}
// 默认导出
export default MobTabExpViewtabviewpanelModel;