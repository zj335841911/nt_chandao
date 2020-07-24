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
      },
      {
        name: 'formitem3',
      },
      {
        name: 'formitem4',
      },
      {
        name: 'formitem5',
      },
      {
        name: 'formitem2',
      },
      {
        name: 'formitem',
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
        name: 'todo',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}