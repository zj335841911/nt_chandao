/**
 * Mob 部件模型
 *
 * @export
 * @class MobModel
 */
export class MobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'updatedate',
      },
      {
        name: 'submittime',
      },
      {
        name: 'todaytask',
      },
      {
        name: 'worktoday',
      },
      {
        name: 'tomorrowplanstask',
      },
      {
        name: 'reportto',
      },
      {
        name: 'createman',
      },
      {
        name: 'createdate',
      },
      {
        name: 'issubmit',
      },
      {
        name: 'date',
      },
      {
        name: 'files',
      },
      {
        name: 'updatemanname',
      },
      {
        name: 'mailtopk',
      },
      {
        name: 'reportstatus',
      },
      {
        name: 'comment',
      },
      {
        name: 'updateman',
      },
      {
        name: 'planstomorrow',
      },
      {
        name: 'mailto',
      },
      {
        name: 'ibzdaily',
        prop: 'ibzdailyid',
      },
      {
        name: 'account',
      },
      {
        name: 'reporttopk',
      },
      {
        name: 'createmanname',
      },
      {
        name: 'ibzdailyname',
      },
    ]
  }

}
// 默认导出
export default MobModel;