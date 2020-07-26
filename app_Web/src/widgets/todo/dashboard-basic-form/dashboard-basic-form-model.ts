/**
 * DashboardBasic 部件模型
 *
 * @export
 * @class DashboardBasicModel
 */
export default class DashboardBasicModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashboardBasicModel
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
        name: 'pri',
        prop: 'pri',
        dataType: 'INT',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'TEXT',
      },
      {
        name: 'account',
        prop: 'account',
        dataType: 'TEXT',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'NSCODELIST',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'NSCODELIST',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'assigneddate',
        prop: 'assigneddate',
        dataType: 'DATETIME',
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