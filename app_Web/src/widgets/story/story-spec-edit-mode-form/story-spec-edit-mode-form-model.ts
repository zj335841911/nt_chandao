/**
 * StorySpec_EditMode 部件模型
 *
 * @export
 * @class StorySpec_EditModeModel
 */
export default class StorySpec_EditModeModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof StorySpec_EditModeModel
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
        name: 'version',
        prop: 'version',
        dataType: 'INT',
      },
      {
        name: 'reviewedby',
        prop: 'reviewedby',
        dataType: 'TEXT',
      },
      {
        name: 'notreview',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
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
        name: 'comment',
      },
      {
        name: 'files',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'story',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}