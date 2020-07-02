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
        name: 'objectid',
      },
      {
        name: 'cases',
      },
      {
        name: 'members',
      },
      {
        name: 'bugs',
      },
      {
        name: 'createdby',
      },
      {
        name: 'stories',
      },
      {
        name: 'tasks',
      },
      {
        name: 'title',
      },
      {
        name: 'begin',
      },
      {
        name: 'objecttype',
      },
      {
        name: 'end',
      },
      {
        name: 'builds',
      },
      {
        name: 'createddate',
      },
      {
        name: 'report',
      },
      {
        name: 'testreport',
        prop: 'id',
      },
      {
        name: 'owner',
      },
      {
        name: 'deleted',
      },
      {
        name: 'product',
      },
      {
        name: 'project',
      },
      {
        name: 'productname',
      },
      {
        name: 'projectname',
      },
      {
        name: 'comment',
      },
    ]
  }


}