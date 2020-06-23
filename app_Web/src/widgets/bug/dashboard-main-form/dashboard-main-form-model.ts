/**
 * DashboardMain 部件模型
 *
 * @export
 * @class DashboardMainModel
 */
export default class DashboardMainModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashboardMainModel
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
        name: 'srfupdatedate',
        prop: 'lastediteddate',
        dataType: 'DATETIME',
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
        prop: 'title',
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
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'productname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'branch',
        prop: 'branch',
        dataType: 'PICKUP',
      },
      {
        name: 'module',
        prop: 'module',
        dataType: 'PICKUP',
      },
      {
        name: 'plan',
        prop: 'plan',
        dataType: 'PICKUP',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'severity',
        prop: 'severity',
        dataType: 'NSCODELIST',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'NSCODELIST',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'activatedcount',
        prop: 'activatedcount',
        dataType: 'INT',
      },
      {
        name: 'activateddate',
        prop: 'activateddate',
        dataType: 'DATETIME',
      },
      {
        name: 'confirmed',
        prop: 'confirmed',
        dataType: 'NSCODELIST',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'deadline',
        prop: 'deadline',
        dataType: 'DATE',
      },
      {
        name: 'os',
        prop: 'os',
        dataType: 'SSCODELIST',
      },
      {
        name: 'browser',
        prop: 'browser',
        dataType: 'SSCODELIST',
      },
      {
        name: 'keywords',
        prop: 'keywords',
        dataType: 'TEXT',
      },
      {
        name: 'mailto',
        prop: 'mailto',
        dataType: 'SMCODELIST',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'projectname',
        prop: 'projectname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'story',
        prop: 'story',
        dataType: 'PICKUP',
      },
      {
        name: 'task',
        prop: 'task',
        dataType: 'PICKUP',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'bug',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}