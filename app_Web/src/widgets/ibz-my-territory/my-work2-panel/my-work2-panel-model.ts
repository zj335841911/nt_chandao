/**
 * MyWork2 部件模型
 *
 * @export
 * @class MyWork2Model
 */
export default class MyWork2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MyWork2Model
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'realname',
        prop: 'realname'
      },
      {
        name: 'mytasks',
        prop: 'mytasks'
      },
      {
        name: 'mybugs',
        prop: 'mybugs'
      },
      {
        name: 'mystorys',
        prop: 'mystorys'
      },
      {
        name: 'projects',
        prop: 'projects'
      },
      {
        name: 'products',
        prop: 'products'
      },
      {
        name: 'myetasks',
        prop: 'myetasks'
      },
      {
        name: 'myebugs',
        prop: 'myebugs'
      },
      {
        name: 'eprojects',
        prop: 'eprojects'
      }
    ]
  }
}