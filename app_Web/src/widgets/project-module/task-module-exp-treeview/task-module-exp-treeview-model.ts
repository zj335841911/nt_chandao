/**
 * TaskModuleExp 部件模型
 *
 * @export
 * @class TaskModuleExpModel
 */
export default class TaskModuleExpModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TaskModuleExpModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'type',
      },
      {
        name: 'collector',
      },
      {
        name: 'projectmodule',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'path',
      },
      {
        name: 'owner',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'name',
      },
      {
        name: 'grade',
      },
      {
        name: 'order',
      },
      {
        name: 'branch',
      },
      {
        name: 'parent',
      },
      {
        name: 'root',
      },
    ]
  }


}