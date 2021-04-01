/**
 * MyWeekly 部件模型
 *
 * @export
 * @class MyWeeklyModel
 */
export class MyWeeklyModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MyWeeklyModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'issubmit',
      },
      {
        name: 'plannextweek',
      },
      {
        name: 'ibzweeklyname',
      },
      {
        name: 'mailto',
      },
      {
        name: 'reporttopk',
      },
      {
        name: 'nextweektask',
      },
      {
        name: 'ibzweekly',
        prop: 'ibzweeklyid',
      },
      {
        name: 'submittime',
      },
      {
        name: 'mailtopk',
      },
      {
        name: 'createman',
      },
      {
        name: 'reportstatus',
      },
      {
        name: 'files',
      },
      {
        name: 'workthisweek',
      },
      {
        name: 'reportto',
      },
      {
        name: 'updatemanname',
      },
      {
        name: 'account',
      },
      {
        name: 'thisweektask',
      },
      {
        name: 'comment',
      },
      {
        name: 'date',
      },
      {
        name: 'updateman',
      },
      {
        name: 'createmanname',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updatedate',
      },
    ]
  }

}
// 默认导出
export default MyWeeklyModel;