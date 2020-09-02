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
        name: 'srfupdatedate',
        prop: 'updatedate',
        dataType: 'DATETIME',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'ibzpro_productid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzpro_productname',
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
        name: 'ibzpro_productname',
        prop: 'ibzpro_productname',
        dataType: 'TEXT',
      },
      {
        name: 'productname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'pssystype',
        prop: 'pssystype',
        dataType: 'SSCODELIST',
      },
      {
        name: 'pmsproduct',
        prop: 'pmsproduct',
        dataType: 'PICKUP',
      },
      {
        name: 'ibzpro_productid',
        prop: 'ibzpro_productid',
        dataType: 'GUID',
      },
      {
        name: 'psobjectid',
        prop: 'psobjectid',
        dataType: 'TEXT',
      },
      {
        name: 'createman',
        prop: 'createman',
        dataType: 'TEXT',
      },
      {
        name: 'createdate',
        prop: 'createdate',
        dataType: 'DATETIME',
      },
      {
        name: 'updateman',
        prop: 'updateman',
        dataType: 'TEXT',
      },
      {
        name: 'updatedate',
        prop: 'updatedate',
        dataType: 'DATETIME',
      },
      {
        name: 'ibzproproduct',
        prop: 'ibzpro_productid',
        dataType: 'FONTKEY',
      },
    ]
  }

}