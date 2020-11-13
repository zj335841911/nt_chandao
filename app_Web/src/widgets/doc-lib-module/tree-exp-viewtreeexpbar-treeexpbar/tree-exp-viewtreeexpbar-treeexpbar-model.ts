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
        name: 'isfavourites',
      },
    ]
  }


}