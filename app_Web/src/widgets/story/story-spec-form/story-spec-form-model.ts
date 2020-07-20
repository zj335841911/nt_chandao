/**
 * StorySpec 部件模型
 *
 * @export
 * @class StorySpecModel
 */
export default class StorySpecModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof StorySpecModel
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
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'version',
        prop: 'version',
        dataType: 'INT',
      },
      {
        name: 'formitem',
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
        name: 'story',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}