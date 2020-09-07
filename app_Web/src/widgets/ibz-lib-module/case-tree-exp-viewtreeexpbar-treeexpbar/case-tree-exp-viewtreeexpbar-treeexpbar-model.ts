/**
 * CaseTreeExpViewtreeexpbar 部件模型
 *
 * @export
 * @class CaseTreeExpViewtreeexpbarModel
 */
export default class CaseTreeExpViewtreeexpbarModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof CaseTreeExpViewtreeexpbarModel
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