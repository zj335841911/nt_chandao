/**
 * TreeDocLib 部件模型
 *
 * @export
 * @class TreeDocLibModel
 */
export default class TreeDocLibModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TreeDocLibModel
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
      {
        name: 'doccnt',
      },
    ]
  }


}