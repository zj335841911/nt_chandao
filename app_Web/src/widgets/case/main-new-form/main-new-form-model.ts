/**
 * MainNew 部件模型
 *
 * @export
 * @class MainNewModel
 */
export default class MainNewModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainNewModel
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
        prop: 'title',
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
        name: 'module',
        prop: 'module',
        dataType: 'PICKUP',
      },
      {
        name: 'modulename',
        prop: 'modulename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'story',
        prop: 'story',
        dataType: 'PICKUP',
      },
      {
        name: 'storyname',
        prop: 'storyname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'NSCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'case',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}