/**
 * Main_EditMode 部件模型
 *
 * @export
 * @class Main_EditModeModel
 */
export default class Main_EditModeModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof Main_EditModeModel
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
        name: 'parent',
        prop: 'parent',
        dataType: 'PICKUP',
      },
      {
        name: 'version',
        prop: 'version',
        dataType: 'INT',
      },
      {
        name: 'spec',
        prop: 'spec',
        dataType: 'TEXT',
      },
      {
        name: 'verify',
        prop: 'verify',
        dataType: 'TEXT',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'prodoctname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'modulename',
        prop: 'modulename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'plan',
        prop: 'plan',
        dataType: 'LONGTEXT',
      },
      {
        name: 'source',
        prop: 'source',
        dataType: 'SSCODELIST',
      },
      {
        name: 'sourcenote',
        prop: 'sourcenote',
        dataType: 'TEXT',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'stage',
        prop: 'stage',
        dataType: 'SSCODELIST',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'NSCODELIST',
      },
      {
        name: 'estimate',
        prop: 'estimate',
        dataType: 'FLOAT',
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
        name: 'openedby',
        prop: 'openedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'openeddate',
        prop: 'openeddate',
        dataType: 'DATETIME',
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
        name: 'linkstories',
        prop: 'linkstories',
        dataType: 'TEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'module',
        prop: 'module',
        dataType: 'PICKUP',
      },
      {
        name: 'story',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}