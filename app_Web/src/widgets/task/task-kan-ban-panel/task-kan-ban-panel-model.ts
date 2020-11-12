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
        name: 'left',
        prop: 'left'
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
        codelist: {tag: 'Task__pri',codelistType: 'STATIC'},
        prop: 'pri'
      },
      {
        name: 'desc',
        prop: 'desc'
      },
      {
        name: 'mailto',
        codelist: {tag: 'UserRealName',codelistType: 'DYNAMIC'},
        prop: 'mailto'
      },
      {
        name: 'parent',
        prop: 'parent'
      },
      {
        name: 'eststarted',
        prop: 'eststarted'
      },
      {
        name: 'consumed',
        prop: 'consumed'
      },
      {
        name: 'color',
        codelist: {tag: 'Task__color',codelistType: 'STATIC'},
        prop: 'color'
      }
    ]
  }
}