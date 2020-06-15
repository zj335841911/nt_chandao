/**
 * TreeExpViewtreeexpbar 部件模型
 *
 * @export
 * @class TreeExpViewtreeexpbarModel
 */
export default class TreeExpViewtreeexpbarModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TreeExpViewtreeexpbarModel
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