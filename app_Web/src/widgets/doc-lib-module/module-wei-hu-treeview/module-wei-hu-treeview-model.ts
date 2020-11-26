/**
 * ModuleWeiHu 部件模型
 *
 * @export
 * @class ModuleWeiHuModel
 */
export default class ModuleWeiHuModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ModuleWeiHuModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'isleaf',
      },
      {
        name: 'name',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'grade',
      },
      {
        name: 'collector',
      },
      {
        name: 'branch',
      },
      {
        name: 'doclibmodule',
        prop: 'id',
      },
      {
        name: 'order',
      },
      {
        name: 'deleted',
      },
      {
        name: 'path',
      },
      {
        name: 'owner',
      },
      {
        name: 'type',
      },
      {
        name: 'root',
      },
      {
        name: 'parent',
      },
      {
        name: 'doclibname',
      },
      {
        name: 'modulename',
      },
      {
        name: 'docqtype',
      },
      {
        name: 'isfavourites',
      },
    ]
  }


}