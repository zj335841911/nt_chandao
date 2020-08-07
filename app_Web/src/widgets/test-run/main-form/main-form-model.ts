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
        name: 'lastrundate',
        prop: 'lastrundate',
        dataType: 'DATETIME',
      },
      {
        name: 'lastrunner',
        prop: 'lastrunner',
        dataType: 'TEXT',
      },
      {
        name: 'lastrunresult',
        prop: 'lastrunresult',
        dataType: 'SSCODELIST',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'case',
        prop: 'ibizcase',
        dataType: 'PICKUP',
      },
      {
        name: 'testrun',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}