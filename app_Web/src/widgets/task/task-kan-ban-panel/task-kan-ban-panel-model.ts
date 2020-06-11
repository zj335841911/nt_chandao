/**
 * TaskKanBan 部件模型
 *
 * @export
 * @class TaskKanBanModel
 */
export default class TaskKanBanModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TaskKanBanModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'name',
        prop: 'name'
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
        name: 'estimate',
        prop: 'estimate'
      }
    ]
  }
}