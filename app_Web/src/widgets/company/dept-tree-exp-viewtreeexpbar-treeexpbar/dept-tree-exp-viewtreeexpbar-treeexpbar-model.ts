/**
 * DeptTreeExpViewtreeexpbar 部件模型
 *
 * @export
 * @class DeptTreeExpViewtreeexpbarModel
 */
export default class DeptTreeExpViewtreeexpbarModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DeptTreeExpViewtreeexpbarModel
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