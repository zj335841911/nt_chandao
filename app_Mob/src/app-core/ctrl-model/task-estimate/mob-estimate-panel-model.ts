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
        name: 'taskestimate',
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
    ]
  }

}
// 默认导出
export default MobEstimateModel;