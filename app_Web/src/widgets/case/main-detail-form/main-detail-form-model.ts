/**
 * MainDetail 部件模型
 *
 * @export
 * @class MainDetailModel
 */
export default class MainDetailModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainDetailModel
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
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'productname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'module',
        prop: 'module',
        dataType: 'PICKUP',
      },
      {
        name: 'modulename',
        prop: 'modulename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'stage',
        prop: 'stage',
        dataType: 'SMCODELIST',
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
        name: 'lastrundate',
        prop: 'lastrundate',
        dataType: 'DATETIME',
      },
      {
        name: 'lastrunresult',
        prop: 'lastrunresult',
        dataType: 'SSCODELIST',
      },
      {
        name: 'keywords',
        prop: 'keywords',
        dataType: 'TEXT',
      },
      {
        name: 'linkcase',
        prop: 'linkcase',
        dataType: 'TEXT',
      },
      {
        name: 'openedby',
        prop: 'openedby',
        dataType: 'TEXT',
      },
      {
        name: 'openeddate',
        prop: 'openeddate',
        dataType: 'DATETIME',
      },
      {
        name: 'lasteditedby',
        prop: 'lasteditedby',
        dataType: 'TEXT',
      },
      {
        name: 'lastediteddate',
        prop: 'lastediteddate',
        dataType: 'DATETIME',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'case',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}