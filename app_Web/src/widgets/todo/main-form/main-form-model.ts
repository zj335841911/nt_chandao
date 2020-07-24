/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export default class MainModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainModel
  */
  public getDataItems(): any[] {
    return [
      {
        name: 'srfwfmemo',
        prop: 'srfwfmemo',
        dataType: 'TEXT',
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'srftempmode',
      },
      {
        name: 'srfuf',
      },
      {
        name: 'srfdeid',
      },
      {
        name: 'srfsourcekey',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'date_disable',
      },
      {
        name: 'cycle_enable',
        prop: 'cycle',
        dataType: 'INT',
      },
      {
        name: 'formitem3',
        prop: 'config_day',
        dataType: 'INT',
      },
      {
        name: 'formitem4',
        prop: 'config_week',
        dataType: 'TEXT',
      },
      {
        name: 'formitem5',
        prop: 'config_month',
        dataType: 'TEXT',
      },
      {
        name: 'formitem2',
        prop: 'config_beforedays',
        dataType: 'INT',
      },
      {
        name: 'formitem',
        prop: 'config_end',
        dataType: 'DATE',
      },
      {
        name: 'assigneddate',
        prop: 'assigneddate',
        dataType: 'DATETIME',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'TEXT',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'INT',
      },
      {
        name: 'task',
        prop: 'task',
        dataType: 'TEXT',
      },
      {
        name: 'story',
        prop: 'story',
        dataType: 'TEXT',
      },
      {
        name: 'bug',
        prop: 'bug',
        dataType: 'TEXT',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'formitem1',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'INT',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'INT',
      },
      {
        name: 'formitem10',
      },
      {
        name: 'private',
        prop: 'ibizprivate',
        dataType: 'NSCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'idvalue',
        prop: 'idvalue',
        dataType: 'INT',
      },
      {
        name: 'todo',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}