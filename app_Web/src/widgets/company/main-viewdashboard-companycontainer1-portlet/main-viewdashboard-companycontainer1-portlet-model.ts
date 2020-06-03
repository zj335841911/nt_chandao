/**
 * MainViewdashboard_companycontainer1 部件模型
 *
 * @export
 * @class MainViewdashboard_companycontainer1Model
 */
export default class MainViewdashboard_companycontainer1Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainViewdashboard_companycontainer1Model
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