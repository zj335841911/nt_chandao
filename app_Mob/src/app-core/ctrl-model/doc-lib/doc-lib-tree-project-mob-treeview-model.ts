/**
 * DocLibTreeProjectMob 部件模型
 *
 * @export
 * @class DocLibTreeProjectMobModel
 */
export class DocLibTreeProjectMobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DocLibTreeProjectMobModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'type',
      },
      {
        name: 'doclibtype',
      },
      {
        name: 'isfavourites',
      },
      {
        name: 'collector',
      },
      {
        name: 'mdeptid',
      },
      {
        name: 'orgid',
      },
      {
        name: 'acl',
      },
      {
        name: 'root',
      },
      {
        name: 'deleted',
      },
      {
        name: 'groups',
      },
      {
        name: 'doccnt',
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
        name: 'modulecnt',
      },
      {
        name: 'openeddate',
      },
      {
        name: 'order',
      },
      {
        name: 'productname',
      },
      {
        name: 'projectname',
      },
      {
        name: 'project',
      },
      {
        name: 'product',
      },
    ]
  }

}
// 默认导出
export default DocLibTreeProjectMobModel;