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
        name: 'branch',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'grade',
      },
      {
        name: 'order',
      },
      {
        name: 'type',
      },
      {
        name: 'collector',
      },
      {
        name: 'ibzlibmodule',
        prop: 'id',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'owner',
      },
      {
        name: 'name',
      },
      {
        name: 'deleted',
      },
      {
        name: 'path',
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
    ]
  }


}