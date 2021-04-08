/**
 * ProjectTeamMob 部件模型
 *
 * @export
 * @class ProjectTeamMobModel
 */
export class ProjectTeamMobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProjectTeamMobModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'role',
      },
      {
        name: 'limited',
      },
      {
        name: 'total',
      },
      {
        name: 'username',
      },
      {
        name: 'days',
      },
      {
        name: 'exitdate',
      },
      {
        name: 'type',
      },
      {
        name: 'order',
      },
      {
        name: 'ibzprojectteam',
        prop: 'id',
      },
      {
        name: 'consumed',
      },
      {
        name: 'account',
      },
      {
        name: 'estimate',
      },
      {
        name: 'join',
      },
      {
        name: 'hours',
      },
      {
        name: 'taskcnt',
      },
      {
        name: 'left',
      },
      {
        name: 'pm',
      },
      {
        name: 'projectname',
      },
      {
        name: 'root',
      },
      {
        name: 'project',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default ProjectTeamMobModel;