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
        name: 'account',
      },
      {
        name: 'left',
      },
      {
        name: 'consumed',
      },
      {
        name: 'ibztaskestimate',
        prop: 'id',
      },
      {
        name: 'date',
      },
      {
        name: 'work',
      },
      {
        name: 'task',
      },
      {
        name: 'dates',
      },
      {
        name: 'evaluationstatus',
      },
      {
        name: 'evaluationcost',
      },
      {
        name: 'evaluationtime',
      },
      {
        name: 'inputcost',
      },
      {
        name: 'evaluationdesc',
      },
      {
        name: 'taskname',
      },
      {
        name: 'project',
      },
      {
        name: 'projectname',
      },
      {
        name: 'taskspecies',
      },
      {
        name: 'type',
      },
      {
        name: 'year',
      },
      {
        name: 'yearname',
      },
      {
        name: 'month',
      },
      {
        name: 'monthname',
      },
      {
        name: 'monthorder',
      },
      {
        name: 'files',
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