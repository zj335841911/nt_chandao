/**
 * TabExpViewtabviewpanel3 部件模型
 *
 * @export
 * @class TabExpViewtabviewpanel3Model
 */
export default class TabExpViewtabviewpanel3Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TabExpViewtabviewpanel3Model
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