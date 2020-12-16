/**
 * IndexPickupViewpickupviewpanel 部件模型
 *
 * @export
 * @class IndexPickupViewpickupviewpanelModel
 */
export default class IndexPickupViewpickupviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof IndexPickupViewpickupviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'indextype',
      },
      {
        name: 'ibizpro_index',
        prop: 'indexid',
      },
      {
        name: 'indexname',
      },
      {
        name: 'deleted',
      },
      {
        name: 'orgid',
      },
      {
        name: 'mdeptid',
      },
    ]
  }


}