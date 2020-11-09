/**
 * DocSum 部件模型
 *
 * @export
 * @class DocSumModel
 */
export default class DocSumModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DocSumModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'groups',
      },
      {
        name: 'editeddate',
      },
      {
        name: 'views',
      },
      {
        name: 'version',
      },
      {
        name: 'editedby',
      },
      {
        name: 'doc',
        prop: 'id',
      },
      {
        name: 'title',
      },
      {
        name: 'deleted',
      },
      {
        name: 'type',
      },
      {
        name: 'addeddate',
      },
      {
        name: 'acl',
      },
      {
        name: 'users',
      },
      {
        name: 'keywords',
      },
      {
        name: 'collector',
      },
      {
        name: 'addedby',
      },
      {
        name: 'lib',
      },
      {
        name: 'project',
      },
      {
        name: 'product',
      },
      {
        name: 'module',
      },
      {
        name: 'projectname',
      },
      {
        name: 'productname',
      },
      {
        name: 'libname',
      },
      {
        name: 'modulename',
      },
      {
        name: 'content',
      },
      {
        name: 'files',
      },
    ]
  }


}
