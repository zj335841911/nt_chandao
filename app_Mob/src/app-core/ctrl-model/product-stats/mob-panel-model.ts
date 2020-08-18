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
        name: 'productstats',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'storycnt',
      },
      {
        name: 'productplancnt',
      },
      {
        name: 'releasecnt',
      },
      {
        name: 'waitstorycnt',
      },
      {
        name: 'plannedstorycnt',
      },
      {
        name: 'developingstorycnt',
      },
      {
        name: 'testingstorycnt',
      },
      {
        name: 'releasedstorycnt',
      },
      {
        name: 'unendproductplancnt',
      },
      {
        name: 'resprojectcnt',
      },
      {
        name: 'undoneresprojectcnt',
      },
      {
        name: 'normalreleasecnt',
      },
      {
        name: 'activestorycnt',
      },
      {
        name: 'activebugcnt',
      },
      {
        name: 'name',
      },
      {
        name: 'assigntomebugcnt',
      },
      {
        name: 'notclosedbugcnt',
      },
      {
        name: 'bugcnt',
      },
      {
        name: 'unconfirmbugcnt',
      },
      {
        name: 'yesterdayclosedbugcnt',
      },
      {
        name: 'yesterdayconfirmbugcnt',
      },
      {
        name: 'yesterdayresolvedbugcnt',
      },
      {
        name: 'postponedprojectcnt',
      },
      {
        name: 'currproject',
      },
      {
        name: 'status',
      },
    ]
  }

}
// 默认导出
export default MobModel;