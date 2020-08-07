/**
 * TodoBase 部件模型
 *
 * @export
 * @class TodoBaseModel
 */
export default class TodoBaseModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TodoBaseModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'todo',
        prop: 'id',
      },
      {
        name: 'account',
      },
      {
        name: 'closeddate',
      },
      {
        name: 'closedby',
      },
      {
        name: 'type',
      },
      {
        name: 'end',
      },
      {
        name: 'desc',
      },
      {
        name: 'finishedby',
      },
      {
        name: 'begin',
      },
      {
        name: 'idvalue',
      },
      {
        name: 'assignedby',
      },
      {
        name: 'finisheddate',
      },
      {
        name: 'cycle',
      },
      {
        name: 'assignedto',
      },
      {
        name: 'status',
      },
      {
        name: 'name',
      },
      {
        name: 'assigneddate',
      },
      {
        name: 'pri',
      },
      {
        name: 'date',
      },
      {
        name: 'ibizprivate',
      },
      {
        name: 'config',
      },
      {
        name: 'config_day',
      },
      {
        name: 'config_beforedays',
      },
      {
        name: 'config_week',
      },
      {
        name: 'config_month',
      },
      {
        name: 'config_type',
      },
      {
        name: 'config_end',
      },
      {
        name: 'bug',
      },
      {
        name: 'task',
      },
      {
        name: 'story',
      },
      {
        name: 'date1',
      },
      {
        name: 'date_disable',
      },
    ]
  }


}