/**
 * CaseTreeExpViewtreeexpbar 部件模型
 *
 * @export
 * @class CaseTreeExpViewtreeexpbarModel
 */
export default class CaseTreeExpViewtreeexpbarModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof CaseTreeExpViewtreeexpbarModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'qd',
      },
      {
        name: 'acl',
      },
      {
        name: 'name',
      },
      {
        name: 'product',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'whitelist',
      },
      {
        name: 'rd',
      },
      {
        name: 'order',
      },
      {
        name: 'type',
      },
      {
        name: 'po',
      },
      {
        name: 'desc',
      },
      {
        name: 'status',
      },
      {
        name: 'createdby',
      },
      {
        name: 'createdversion',
      },
      {
        name: 'substatus',
      },
      {
        name: 'code',
      },
      {
        name: 'createddate',
      },
      {
        name: 'linename',
      },
      {
        name: 'line',
      },
      {
        name: 'activebugcnt',
      },
      {
        name: 'productplancnt',
      },
      {
        name: 'releasecnt',
      },
      {
        name: 'activestorycnt',
      },
      {
        name: 'unconfirmbugcnt',
      },
      {
        name: 'notclosedbugcnt',
      },
    ]
  }


}