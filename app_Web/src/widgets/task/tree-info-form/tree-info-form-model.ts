/**
 * TreeInfo 部件模型
 *
 * @export
 * @class TreeInfoModel
 */
export default class TreeInfoModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof TreeInfoModel
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
        name: 'parent',
        prop: 'parent',
        dataType: 'PICKUP',
      },
      {
        name: 'story',
        prop: 'story',
        dataType: 'PICKUP',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'estimate',
        prop: 'estimate',
        dataType: 'FLOAT',
      },
      {
        name: 'consumed',
        prop: 'consumed',
        dataType: 'FLOAT',
      },
      {
        name: 'left',
        prop: 'left',
        dataType: 'FLOAT',
      },
      {
        name: 'desc',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'task',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}