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
      {
        name: 'product',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }


}