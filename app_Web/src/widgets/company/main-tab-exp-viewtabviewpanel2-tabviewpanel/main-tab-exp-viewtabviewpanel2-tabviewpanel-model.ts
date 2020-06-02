/**
 * MainTabExpViewtabviewpanel2 部件模型
 *
 * @export
 * @class MainTabExpViewtabviewpanel2Model
 */
export default class MainTabExpViewtabviewpanel2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabviewpanel2Model
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