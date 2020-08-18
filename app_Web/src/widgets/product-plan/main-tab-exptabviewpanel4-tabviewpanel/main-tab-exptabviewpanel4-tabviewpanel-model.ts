/**
 * MainTabExptabviewpanel4 部件模型
 *
 * @export
 * @class MainTabExptabviewpanel4Model
 */
export default class MainTabExptabviewpanel4Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExptabviewpanel4Model
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
      {
        name: 'bugcnt',
      },
    ]
  }


}