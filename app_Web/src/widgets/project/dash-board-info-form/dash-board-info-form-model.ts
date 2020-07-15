/**
 * DashBoardInfo 部件模型
 *
 * @export
 * @class DashBoardInfoModel
 */
export default class DashBoardInfoModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashBoardInfoModel
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
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'code',
        prop: 'code',
        dataType: 'TEXT',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'desc',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'DATE',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'DATE',
      },
      {
        name: 'days',
        prop: 'days',
        dataType: 'INT',
      },
      {
        name: 'formitem',
      },
      {
        name: 'formitem1',
      },
      {
        name: 'formitem2',
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
        name: 'acl',
        prop: 'acl',
        dataType: 'SSCODELIST',
      },
      {
        name: 'project',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}