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
        name: 'severity',
        codelist:{tag:'Bug__severity',codelistType:'STATIC'},
        prop: 'severity'
      },
      {
        name: 'pri',
        codelist:{tag:'Bug__pri',codelistType:'STATIC'},
        prop: 'pri'
      },
      {
        name: 'deadline',
        prop: 'deadline'
      },
      {
        name: 'delay',
        prop: 'delay'
      },
      {
        name: 'resolveddate',
        prop: 'resolveddate'
      },
      {
        name: 'resolvedby',
        prop: 'resolvedby'
      },
      {
        name: 'delayresolve',
        prop: 'delayresolve'
      },
      {
        name: 'closeddate',
        prop: 'closeddate'
      },
      {
        name: 'closedby',
        prop: 'closedby'
      },
      {
        name: 'assignedto',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'assignedto'
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
        name: 'confirmed',
        prop: 'confirmed'
      },
      {
        name: 'isfavorites',
        prop: 'isfavorites'
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
        name: 'status',
        prop: 'status'
      }
    ]
  }
}