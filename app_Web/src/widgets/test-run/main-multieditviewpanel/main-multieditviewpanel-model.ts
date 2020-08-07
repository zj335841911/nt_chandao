/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export default class MainModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'lastrunresult',
      },
      {
        name: 'lastrundate',
      },
      {
        name: 'assignedto',
      },
      {
        name: 'lastrunner',
      },
      {
        name: 'status',
      },
      {
        name: 'testrun',
        prop: 'id',
      },
      {
        name: 'version',
      },
      {
        name: 'ibizcase',
      },
      {
        name: 'task',
      },
    ]
  }


}