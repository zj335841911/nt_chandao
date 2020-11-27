/**
 * DocAction 部件模型
 *
 * @export
 * @class DocActionModel
 */
export default class DocActionModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DocActionModel
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
      {
        name: 'url',
      },
      {
        name: 'docqtype',
      },
      {
        name: 'isfavourites',
      },
      {
        name: 'alldoccnt',
      },
      {
        name: 'recentupdatecnt',
      },
      {
        name: 'todayupdatecnt',
      },
      {
        name: 'recentaddcnt',
      },
      {
        name: 'mydoccnt',
      },
      {
        name: 'myfavouritecnt',
      },
      {
        name: 'doccnt',
      },
    ]
  }


}
