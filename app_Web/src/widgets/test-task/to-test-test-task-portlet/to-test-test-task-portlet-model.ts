/**
 * ToTestTestTask 部件模型
 *
 * @export
 * @class ToTestTestTaskModel
 */
export default class ToTestTestTaskModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ToTestTestTaskModel
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
      {
        name: 'buildname',
      },
      {
        name: 'comment',
      },
    ]
  }


}
