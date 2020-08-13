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
        name: 'lastrunner',
      },
      {
        name: 'stepresults',
      },
      {
        name: 'caseresult',
      },
      {
        name: 'xml',
      },
      {
        name: 'duration',
      },
      {
        name: 'date',
      },
      {
        name: 'testresult',
        prop: 'id',
      },
      {
        name: 'version',
      },
      {
        name: 'job',
      },
      {
        name: 'ibizcase',
      },
      {
        name: 'run',
      },
      {
        name: 'compile',
      },
      {
        name: 'task',
      },
      {
        name: 'title',
      },
      {
        name: 'story',
      },
      {
        name: 'module',
      },
      {
        name: 'product',
      },
      {
        name: 'precondition',
      },
    ]
  }


}