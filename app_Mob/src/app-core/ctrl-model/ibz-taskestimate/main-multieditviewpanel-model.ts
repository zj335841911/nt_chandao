/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export class MainModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'monthname',
      },
      {
        name: 'year',
      },
      {
        name: 'account',
      },
      {
        name: 'left',
      },
      {
        name: 'consumed',
      },
      {
        name: 'evaluationcost',
      },
      {
        name: 'monthorder',
      },
      {
        name: 'files',
      },
      {
        name: 'ibztaskestimate',
        prop: 'id',
      },
      {
        name: 'evaluationstatus',
      },
      {
        name: 'yearname',
      },
      {
        name: 'date',
      },
      {
        name: 'evaluationtime',
      },
      {
        name: 'inputcost',
      },
      {
        name: 'dates',
      },
      {
        name: 'month',
      },
      {
        name: 'work',
      },
      {
        name: 'evaluationdesc',
      },
      {
        name: 'taskspecies',
      },
      {
        name: 'taskname',
      },
      {
        name: 'projectname',
      },
      {
        name: 'type',
      },
      {
        name: 'deleted',
      },
      {
        name: 'project',
      },
      {
        name: 'task',
      },
      {
        name: 'task',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default MainModel;