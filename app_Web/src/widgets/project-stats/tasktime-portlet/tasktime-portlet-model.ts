/**
 * TASKTIME 部件模型
 *
 * @export
 * @class TASKTIMEModel
 */
export default class TASKTIMEModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TASKTIMEModel
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
        name: 'donetaskrate',
      },
      {
        name: 'closedstoryrate',
      },
      {
        name: 'finishbugrate',
      },
      {
        name: 'deleted',
      },
    ]
  }


}