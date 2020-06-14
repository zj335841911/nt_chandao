/**
 * MainTabExpViewtabviewpanel4 部件模型
 *
 * @export
 * @class MainTabExpViewtabviewpanel4Model
 */
export default class MainTabExpViewtabviewpanel4Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabviewpanel4Model
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