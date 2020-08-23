/**
 * MainTabExptabviewpanel3 部件模型
 *
 * @export
 * @class MainTabExptabviewpanel3Model
 */
export default class MainTabExptabviewpanel3Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExptabviewpanel3Model
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
      {
        name: 'isexpired',
      },
      {
        name: 'estimatecnt',
      },
    ]
  }


}