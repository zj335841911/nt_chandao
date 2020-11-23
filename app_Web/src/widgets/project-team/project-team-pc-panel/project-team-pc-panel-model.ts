/**
 * ProjectTeamPc 部件模型
 *
 * @export
 * @class ProjectTeamPcModel
 */
export default class ProjectTeamPcModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProjectTeamPcModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'account',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'account'
      },
      {
        name: 'role',
        prop: 'role'
      },
      {
        name: 'join',
        prop: 'join'
      },
      {
        name: 'consumed',
        prop: 'consumed'
      },
      {
        name: 'left',
        prop: 'left'
      },
      {
        name: 'estimate',
        prop: 'estimate'
      }
    ]
  }
}