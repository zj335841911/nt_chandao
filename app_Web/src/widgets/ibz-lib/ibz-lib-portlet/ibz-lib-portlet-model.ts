/**
 * IbzLib 部件模型
 *
 * @export
 * @class IbzLibModel
 */
export default class IbzLibModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof IbzLibModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'desc',
      },
      {
        name: 'lastediteddate',
      },
      {
        name: 'addeddate',
      },
      {
        name: 'ibzlib',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'name',
      },
      {
        name: 'type',
      },
      {
        name: 'addedby',
      },
      {
        name: 'lasteditedby',
      },
    ]
  }


}
