/**
 * DashboardBugLife 部件模型
 *
 * @export
 * @class DashboardBugLifeModel
 */
export default class DashboardBugLifeModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashboardBugLifeModel
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
        name: 'openedby',
        prop: 'openedby',
        dataType: 'TEXT',
      },
      {
        name: 'openedbuild',
        prop: 'openedbuild',
        dataType: 'TEXT',
      },
      {
        name: 'resolvedby',
        prop: 'resolvedby',
        dataType: 'TEXT',
      },
      {
        name: 'resolvedbuild',
        prop: 'resolvedbuild',
        dataType: 'TEXT',
      },
      {
        name: 'resolution',
        prop: 'resolution',
        dataType: 'SSCODELIST',
      },
      {
        name: 'closedby',
        prop: 'closedby',
        dataType: 'TEXT',
      },
      {
        name: 'lasteditedby',
        prop: 'lasteditedby',
        dataType: 'TEXT',
      },
      {
        name: 'linkbug',
        prop: 'linkbug',
        dataType: 'TEXT',
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