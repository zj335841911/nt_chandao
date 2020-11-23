/**
 * BugKanBan 部件模型
 *
 * @export
 * @class BugKanBanModel
 */
export default class BugKanBanModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof BugKanBanModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'name',
        prop: 'title'
      },
      {
        name: 'assignedto',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'assignedto'
      },
      {
        name: 'deadline',
        prop: 'deadline'
      },
      {
        name: 'product',
        prop: 'product'
      },
      {
        name: 'project',
        prop: 'project'
      },
      {
        name: 'module',
        prop: 'module'
      },
      {
        name: 'srfkey',
        prop: 'id'
      },
      {
        name: 'story',
        prop: 'story'
      },
      {
        name: 'pri',
        prop: 'pri'
      },
      {
        name: 'status',
        prop: 'status'
      }
    ]
  }
}