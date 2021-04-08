/**
 * MobPickupViewpickupviewpanel 部件模型
 *
 * @export
 * @class MobPickupViewpickupviewpanelModel
 */
export class MobPickupViewpickupviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobPickupViewpickupviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'ids',
      },
      {
        name: 'name',
      },
      {
        name: 'backgroundid',
      },
      {
        name: 'builder',
      },
      {
        name: 'files',
      },
      {
        name: 'releasetype',
      },
      {
        name: 'builderpk',
      },
      {
        name: 'rebuild',
      },
      {
        name: 'desc',
      },
      {
        name: 'build',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'sqlid',
      },
      {
        name: 'scmpath',
      },
      {
        name: 'filepath',
      },
      {
        name: 'createbugcnt',
      },
      {
        name: 'stories',
      },
      {
        name: 'bugs',
      },
      {
        name: 'frontapplication',
      },
      {
        name: 'noticeusers',
      },
      {
        name: 'date',
      },
      {
        name: 'productname',
      },
      {
        name: 'product',
      },
      {
        name: 'branch',
      },
      {
        name: 'project',
      },
    ]
  }

}
// 默认导出
export default MobPickupViewpickupviewpanelModel;