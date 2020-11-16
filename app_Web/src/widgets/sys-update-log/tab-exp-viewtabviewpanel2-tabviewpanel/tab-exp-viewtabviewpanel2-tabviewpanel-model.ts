/**
 * TabExpViewtabviewpanel2 部件模型
 *
 * @export
 * @class TabExpViewtabviewpanel2Model
 */
export default class TabExpViewtabviewpanel2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TabExpViewtabviewpanel2Model
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