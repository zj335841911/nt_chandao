/**
 * ModuleExp 部件模型
 *
 * @export
 * @class ModuleExpModel
 */
export default class ModuleExpModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ModuleExpModel
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
        name: 'order',
      },
      {
        name: 'branch',
      },
      {
        name: 'ibizshort',
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
        name: 'testmodule',
        prop: 'id',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'collector',
      },
      {
        name: 'parent',
      },
      {
        name: 'parentname',
      },
      {
        name: 'root',
      },
      {
        name: 'rootname',
      },
    ]
  }


}