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
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'root',
        prop: 'root',
        dataType: 'PICKUP',
      },
      {
        name: 'ibiz_id',
        prop: 'ibizid',
        dataType: 'TEXT',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'grade',
        prop: 'grade',
        dataType: 'INT',
      },
      {
        name: 'short',
        prop: 'ibizshort',
        dataType: 'TEXT',
      },
      {
        name: 'ibzprostorymodule',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}