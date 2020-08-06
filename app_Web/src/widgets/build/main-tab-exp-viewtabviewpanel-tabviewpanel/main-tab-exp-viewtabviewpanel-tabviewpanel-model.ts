/**
 * MainTabExpViewtabviewpanel 部件模型
 *
 * @export
 * @class MainTabExpViewtabviewpanelModel
 */
export default class MainTabExpViewtabviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'name',
      },
      {
        name: 'builder',
      },
      {
        name: 'desc',
      },
      {
        name: 'build',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'scmpath',
      },
      {
        name: 'filepath',
      },
      {
        name: 'stories',
      },
      {
        name: 'bugs',
      },
      {
        name: 'date',
      },
      {
        name: 'product',
      },
      {
        name: 'branch',
      },
      {
        name: 'project',
      },
      {
        name: 'productname',
      },
    ]
  }


}