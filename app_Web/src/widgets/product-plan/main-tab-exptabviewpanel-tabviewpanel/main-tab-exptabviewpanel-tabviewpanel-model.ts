/**
 * MainTabExptabviewpanel 部件模型
 *
 * @export
 * @class MainTabExptabviewpanelModel
 */
export default class MainTabExptabviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExptabviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'title',
      },
      {
        name: 'productplan',
        prop: 'id',
      },
      {
        name: 'begin',
      },
      {
        name: 'desc',
      },
      {
        name: 'end',
      },
      {
        name: 'deleted',
      },
      {
        name: 'order',
      },
      {
        name: 'parentname',
      },
      {
        name: 'branch',
      },
      {
        name: 'parent',
      },
      {
        name: 'product',
      },
      {
        name: 'statuss',
      },
      {
        name: 'future',
      },
      {
        name: 'delta',
      },
      {
        name: 'oldtitle',
      },
      {
        name: 'storycnt',
      },
    ]
  }


}