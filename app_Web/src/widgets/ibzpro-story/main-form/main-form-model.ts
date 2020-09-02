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
        prop: 'ibzprostoryid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzprostoryname',
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
        name: 'pmsstory',
        prop: 'pmsstory',
        dataType: 'PICKUP',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'productname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'storymodulename',
        prop: 'storymodulename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'pmsstoryname',
        prop: 'pmsstoryname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'ibzpro_storyname',
        prop: 'ibzprostoryname',
        dataType: 'TEXT',
      },
      {
        name: 'storymodule',
        prop: 'storymodule',
        dataType: 'PICKUP',
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
        name: 'ibzpro_storyid',
        prop: 'ibzprostoryid',
        dataType: 'GUID',
      },
      {
        name: 'ibzprostory',
        prop: 'ibzprostoryid',
        dataType: 'FONTKEY',
      },
    ]
  }

}