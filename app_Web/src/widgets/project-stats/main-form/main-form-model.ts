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
        name: 'taskcnt',
        prop: 'taskcnt',
        dataType: 'INT',
      },
      {
        name: 'donetaskrate',
        prop: 'donetaskrate',
        dataType: 'FLOAT',
      },
      {
        name: 'undonetaskcnt',
        prop: 'undonetaskcnt',
        dataType: 'INT',
      },
      {
        name: 'storycnt',
        prop: 'storycnt',
        dataType: 'INT',
      },
      {
        name: 'closedstoryrate',
        prop: 'closedstoryrate',
        dataType: 'FLOAT',
      },
      {
        name: 'unclosedstorycnt',
        prop: 'unclosedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'bugcnt',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'finishbugrate',
        prop: 'finishbugrate',
        dataType: 'FLOAT',
      },
      {
        name: 'activebugcnt',
        prop: 'activebugcnt',
        dataType: 'INT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'projectstats',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}