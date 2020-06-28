/**
 * Resolve 部件模型
 *
 * @export
 * @class ResolveModel
 */
export default class ResolveModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ResolveModel
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
        name: 'resolution',
        prop: 'resolution',
        dataType: 'SSCODELIST',
      },
      {
        name: 'resolvedbuild',
        prop: 'resolvedbuild',
        dataType: 'SSCODELIST',
      },
      {
        name: 'resolveddate',
        prop: 'resolveddate',
        dataType: 'DATETIME',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'files',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'HTMLTEXT',
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