/**
 * DeptUserExp 部件模型
 *
 * @export
 * @class DeptUserExpModel
 */
export default class DeptUserExpModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DeptUserExpModel
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