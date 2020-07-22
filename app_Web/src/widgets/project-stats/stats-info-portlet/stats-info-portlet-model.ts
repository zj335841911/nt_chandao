/**
 * StatsInfo 部件模型
 *
 * @export
 * @class StatsInfoModel
 */
export default class StatsInfoModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof StatsInfoModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'projectstats',
        prop: 'id',
      },
      {
        name: 'storycnt',
      },
      {
        name: 'taskcnt',
      },
      {
        name: 'totalestimate',
      },
      {
        name: 'totalconsumed',
      },
      {
        name: 'totalleft',
      },
      {
        name: 'undonetaskcnt',
      },
      {
        name: 'closedstorycnt',
      },
      {
        name: 'bugcnt',
      },
      {
        name: 'activebugcnt',
      },
      {
        name: 'unclosedstorycnt',
      },
      {
        name: 'finishtaskcnt',
      },
      {
        name: 'finishbugcnt',
      },
      {
        name: 'deleted',
      },
      {
        name: 'time',
      },
      {
        name: 'type',
      },
      {
        name: 'name',
      },
      {
        name: 'unconfirmedbugcnt',
      },
      {
        name: 'unclosedbugcnt',
      },
    ]
  }


}
