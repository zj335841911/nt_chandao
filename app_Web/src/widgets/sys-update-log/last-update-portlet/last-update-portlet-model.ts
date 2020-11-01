/**
 * LastUpdate 部件模型
 *
 * @export
 * @class LastUpdateModel
 */
export default class LastUpdateModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof LastUpdateModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'sysupdatelog',
        prop: 'sysupdatelogid',
      },
      {
        name: 'sysupdatelogname',
      },
      {
        name: 'updateman',
      },
      {
        name: 'createman',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'update',
      },
      {
        name: 'updesc',
      },
      {
        name: 'latestupdate',
      },
      {
        name: 'updatefeatures',
      },
      {
        name: 'updatebranch',
      },
    ]
  }


}
