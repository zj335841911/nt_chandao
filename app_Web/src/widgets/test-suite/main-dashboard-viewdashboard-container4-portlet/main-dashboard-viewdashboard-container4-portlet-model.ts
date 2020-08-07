/**
 * MainDashboardViewdashboard_container4 部件模型
 *
 * @export
 * @class MainDashboardViewdashboard_container4Model
 */
export default class MainDashboardViewdashboard_container4Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainDashboardViewdashboard_container4Model
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'name',
      },
      {
        name: 'addeddate',
      },
      {
        name: 'testsuite',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'lasteditedby',
      },
      {
        name: 'type',
      },
      {
        name: 'lastediteddate',
      },
      {
        name: 'addedby',
      },
      {
        name: 'desc',
      },
      {
        name: 'product',
      },
    ]
  }


}