/**
 * StoryKanBan 部件模型
 *
 * @export
 * @class StoryKanBanModel
 */
export default class StoryKanBanModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof StoryKanBanModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'title',
        prop: 'title'
      },
      {
        name: 'status',
        codelist:{tag:'Story__status',codelistType:'STATIC'},
        prop: 'status'
      },
      {
        name: 'estimate',
        prop: 'estimate'
      },
      {
        name: 'id',
        prop: 'id'
      }
    ]
  }
}