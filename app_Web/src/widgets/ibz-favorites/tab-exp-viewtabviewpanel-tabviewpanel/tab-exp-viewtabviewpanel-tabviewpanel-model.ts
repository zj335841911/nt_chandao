/**
 * TabExpViewtabviewpanel 部件模型
 *
 * @export
 * @class TabExpViewtabviewpanelModel
 */
export default class TabExpViewtabviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TabExpViewtabviewpanelModel
    */
  public getDataItems(): any[] {
    return [
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
        name: 'ibzfavoritesname',
      },
      {
        name: 'updateman',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'objectid',
      },
      {
        name: 'account',
      },
      {
        name: 'type',
      },
    ]
  }


}