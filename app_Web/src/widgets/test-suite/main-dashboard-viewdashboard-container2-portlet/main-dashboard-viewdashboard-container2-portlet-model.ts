/**
 * MainDashboardViewdashboard_container2 部件模型
 *
 * @export
 * @class MainDashboardViewdashboard_container2Model
 */
export default class MainDashboardViewdashboard_container2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainDashboardViewdashboard_container2Model
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