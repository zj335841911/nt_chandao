/**
 * BugExp 部件模型
 *
 * @export
 * @class BugExpModel
 */
export default class BugExpModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof BugExpModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'path',
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
        name: 'root',
      },
      {
        name: 'parent',
      },
      {
        name: 'rootname',
      },
      {
        name: 'parentname',
      },
    ]
  }


}