/**
 * MainTabExpViewtabexppanel 部件模型
 *
 * @export
 * @class MainTabExpViewtabexppanelModel
 */
export default class MainTabExpViewtabexppanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabexppanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'stories',
      },
      {
        name: 'marker',
      },
      {
        name: 'release',
        prop: 'id',
      },
      {
        name: 'leftbugs',
      },
      {
        name: 'bugs',
      },
      {
        name: 'deleted',
      },
      {
        name: 'name',
      },
      {
        name: 'date',
      },
      {
        name: 'status',
      },
      {
        name: 'substatus',
      },
      {
        name: 'desc',
      },
      {
        name: 'buildname',
      },
      {
        name: 'product',
      },
      {
        name: 'build',
      },
      {
        name: 'branch',
      },
      {
        name: 'productname',
      },
    ]
  }


}