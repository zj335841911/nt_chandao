/**
 * MySubmit 部件模型
 *
 * @export
 * @class MySubmitModel
 */
export class MySubmitModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MySubmitModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'updatemanname',
      },
      {
        name: 'mailto',
      },
      {
        name: 'ibzreport',
        prop: 'ibzdailyid',
      },
      {
        name: 'reportlycnt',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'worktoday',
      },
      {
        name: 'monthlycnt',
      },
      {
        name: 'dailycnt',
      },
      {
        name: 'createdate',
      },
      {
        name: 'todaytask',
      },
      {
        name: 'account',
      },
      {
        name: 'type',
      },
      {
        name: 'createman',
      },
      {
        name: 'updateman',
      },
      {
        name: 'ibzdailyname',
      },
      {
        name: 'reportto',
      },
      {
        name: 'submittime',
      },
      {
        name: 'files',
      },
      {
        name: 'createmanname',
      },
      {
        name: 'planstomorrow',
      },
      {
        name: 'reportstatus',
      },
      {
        name: 'date',
      },
      {
        name: 'issubmit',
      },
      {
        name: 'comment',
      },
      {
        name: 'tomorrowplanstask',
      },
    ]
  }

}
// 默认导出
export default MySubmitModel;