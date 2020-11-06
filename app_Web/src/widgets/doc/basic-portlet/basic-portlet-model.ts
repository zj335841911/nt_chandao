/**
 * Basic 部件模型
 *
 * @export
 * @class BasicModel
 */
export default class BasicModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof BasicModel
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
    ]
  }


}
