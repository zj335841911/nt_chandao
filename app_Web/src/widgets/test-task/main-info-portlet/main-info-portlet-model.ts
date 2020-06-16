/**
 * MainInfo 部件模型
 *
 * @export
 * @class MainInfoModel
 */
export default class MainInfoModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainInfoModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'end',
      },
      {
        name: 'begin',
      },
      {
        name: 'mailto',
      },
      {
        name: 'pri',
      },
      {
        name: 'substatus',
      },
      {
        name: 'report',
      },
      {
        name: 'desc',
      },
      {
        name: 'testtask',
        prop: 'id',
      },
      {
        name: 'status',
      },
      {
        name: 'owner',
      },
      {
        name: 'deleted',
      },
      {
        name: 'auto',
      },
      {
        name: 'name',
      },
      {
        name: 'product',
      },
      {
        name: 'build',
      },
      {
        name: 'project',
      },
      {
        name: 'productname',
      },
      {
        name: 'projecttname',
      },
    ]
  }


}
