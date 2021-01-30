/**
 * MobEstimate 部件模型
 *
 * @export
 * @class MobEstimateModel
 */
export class MobEstimateModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobEstimateModel
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
        name: 'taskestimate',
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
    ]
  }

}
// 默认导出
export default MobEstimateModel;