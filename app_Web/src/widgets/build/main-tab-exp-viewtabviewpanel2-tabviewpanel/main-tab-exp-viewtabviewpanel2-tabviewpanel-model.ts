/**
 * MainTabExpViewtabviewpanel2 部件模型
 *
 * @export
 * @class MainTabExpViewtabviewpanel2Model
 */
export default class MainTabExpViewtabviewpanel2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabviewpanel2Model
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