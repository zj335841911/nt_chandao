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
        name: 'path',
      },
      {
        name: 'orderpk',
      },
      {
        name: 'deleted',
      },
      {
        name: 'name',
      },
      {
        name: 'branch',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'order',
      },
      {
        name: 'grade',
      },
      {
        name: 'type',
      },
      {
        name: 'owner',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'productmodule',
        prop: 'id',
      },
      {
        name: 'collector',
      },
      {
        name: 'rootname',
      },
      {
        name: 'parentname',
      },
      {
        name: 'root',
      },
      {
        name: 'parent',
      },
    ]
  }

}
// 默认导出
export default MobPickupViewpickupviewpanelModel;