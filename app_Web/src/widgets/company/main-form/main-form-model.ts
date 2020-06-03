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
        name: 'srfwfmemo',
        prop: 'srfwfmemo',
        dataType: 'TEXT',
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'srftempmode',
      },
      {
        name: 'srfuf',
      },
      {
        name: 'srfdeid',
      },
      {
        name: 'srfsourcekey',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'phone',
        prop: 'phone',
        dataType: 'TEXT',
      },
      {
        name: 'fax',
        prop: 'fax',
        dataType: 'TEXT',
      },
      {
        name: 'address',
        prop: 'address',
        dataType: 'TEXT',
      },
      {
        name: 'zipcode',
        prop: 'zipcode',
        dataType: 'TEXT',
      },
      {
        name: 'website',
        prop: 'website',
        dataType: 'TEXT',
      },
      {
        name: 'backyard',
        prop: 'backyard',
        dataType: 'TEXT',
      },
      {
        name: 'guest',
        prop: 'guest',
        dataType: 'SSCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'company',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}