/**
 * FinishTaskAndBug 部件模型
 *
 * @export
 * @class FinishTaskAndBugModel
 */
export default class FinishTaskAndBugModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof FinishTaskAndBugModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'useryearworkstats',
        prop: 'id',
      },
      {
        name: 'realname',
      },
      {
        name: 'account',
      },
      {
        name: 'role',
      },
      {
        name: 'dept',
      },
      {
        name: 'visits',
      },
      {
        name: 'yearplancnt',
      },
      {
        name: 'yearproductcnt',
      },
      {
        name: 'yearstorycnt',
      },
      {
        name: 'yearactioncnt',
      },
      {
        name: 'yearbugcnt',
      },
      {
        name: 'yearcasecnt',
      },
      {
        name: 'yearlogcnt',
      },
      {
        name: 'yearestimatecnt',
      },
      {
        name: 'judgerole',
      },
      {
        name: 'yearvisits',
      },
      {
        name: 'curyear',
      },
      {
        name: 'title',
      },
      {
        name: 'monthfinishtask',
      },
      {
        name: 'montestimate',
      },
      {
        name: 'montresolvedbug',
      },
      {
        name: 'curmonth',
      },
    ]
  }


}
