/**
 * Main2 部件模型
 *
 * @export
 * @class Main2Model
 */
export default class Main2Model {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof Main2Model
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
        name: 'storycnt',
        prop: 'storycnt',
        dataType: 'INT',
      },
      {
        name: 'waitstorycnt',
        prop: 'waitstorycnt',
        dataType: 'INT',
      },
      {
        name: 'plannedstorycnt',
        prop: 'plannedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'developingstorycnt',
        prop: 'developingstorycnt',
        dataType: 'INT',
      },
      {
        name: 'testingstorycnt',
        prop: 'testingstorycnt',
        dataType: 'INT',
      },
      {
        name: 'releasedstorycnt',
        prop: 'releasedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'productplancnt',
        prop: 'productplancnt',
        dataType: 'INT',
      },
      {
        name: 'unendproductplanrate',
        prop: 'unendproductplanrate',
        dataType: 'FLOAT',
      },
      {
        name: 'unendproductplancnt',
        prop: 'unendproductplancnt',
        dataType: 'INT',
      },
      {
        name: 'resprojectcnt',
        prop: 'resprojectcnt',
        dataType: 'INT',
      },
      {
        name: 'undoneresprojectrate',
        prop: 'undoneresprojectrate',
        dataType: 'INT',
      },
      {
        name: 'undoneresprojectcnt',
        prop: 'undoneresprojectcnt',
        dataType: 'INT',
      },
      {
        name: 'releasecnt',
        prop: 'releasecnt',
        dataType: 'INT',
      },
      {
        name: 'normalreleaserate',
        prop: 'normalreleaserate',
        dataType: 'INT',
      },
      {
        name: 'normalreleasecnt',
        prop: 'normalreleasecnt',
        dataType: 'INT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'productstats',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}