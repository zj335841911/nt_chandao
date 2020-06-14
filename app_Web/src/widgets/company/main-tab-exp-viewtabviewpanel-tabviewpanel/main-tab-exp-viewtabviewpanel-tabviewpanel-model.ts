/**
 * MainTabExpViewtabviewpanel 部件模型
 *
 * @export
 * @class MainTabExpViewtabviewpanelModel
 */
export default class MainTabExpViewtabviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'admins',
      },
      {
        name: 'fax',
      },
      {
        name: 'deleted',
      },
      {
        name: 'website',
      },
      {
        name: 'company',
        prop: 'id',
      },
      {
        name: 'zipcode',
      },
      {
        name: 'address',
      },
      {
        name: 'backyard',
      },
      {
        name: 'name',
      },
      {
        name: 'guest',
      },
      {
        name: 'phone',
      },
    ]
  }


}