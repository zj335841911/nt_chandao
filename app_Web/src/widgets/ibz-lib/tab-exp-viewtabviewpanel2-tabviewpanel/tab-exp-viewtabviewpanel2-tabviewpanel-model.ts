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