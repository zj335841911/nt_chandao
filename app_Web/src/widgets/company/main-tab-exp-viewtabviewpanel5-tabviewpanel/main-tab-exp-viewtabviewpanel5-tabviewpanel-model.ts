/**
 * MainTabExpViewtabviewpanel5 部件模型
 *
 * @export
 * @class MainTabExpViewtabviewpanel5Model
 */
export default class MainTabExpViewtabviewpanel5Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabviewpanel5Model
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