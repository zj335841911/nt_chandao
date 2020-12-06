/**
 * ProductLeftDocLibTree 部件模型
 *
 * @export
 * @class ProductLeftDocLibTreeModel
 */
export default class ProductLeftDocLibTreeModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductLeftDocLibTreeModel
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
        name: 'acl',
      },
      {
        name: 'deleted',
      },
      {
        name: 'groups',
      },
      {
        name: 'doclib',
        prop: 'id',
      },
      {
        name: 'users',
      },
      {
        name: 'main',
      },
      {
        name: 'name',
      },
      {
        name: 'order',
      },
      {
        name: 'project',
      },
      {
        name: 'product',
      },
      {
        name: 'doccnt',
      },
      {
        name: 'doclibtype',
      },
      {
        name: 'projectname',
      },
      {
        name: 'productname',
      },
      {
        name: 'isfavourites',
      },
      {
        name: 'orgid',
      },
      {
        name: 'mdeptid',
      },
      {
        name: 'root',
      },
      {
        name: 'modulecnt',
      },
      {
        name: 'openeddate',
      },
    ]
  }


}