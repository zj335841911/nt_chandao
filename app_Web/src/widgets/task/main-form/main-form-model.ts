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
        prop: 'lastediteddate',
        dataType: 'DATETIME',
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
        name: 'projectname',
        prop: 'projectname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'modulename',
        prop: 'modulename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'formitem',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'formitem1',
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
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'NSCODELIST',
      },
      {
        name: 'estimate',
        prop: 'estimate',
        dataType: 'FLOAT',
      },
      {
        name: 'desc',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'formitem2',
      },
      {
        name: 'deadline',
        prop: 'deadline',
        dataType: 'DATE',
      },
      {
        name: 'estsarted',
        prop: 'eststarted',
        dataType: 'DATE',
      },
      {
        name: 'formitemex1',
      },
      {
        name: 'mailto',
        prop: 'mailto',
        dataType: 'LONGTEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'module',
        prop: 'module',
        dataType: 'PICKUP',
      },
      {
        name: 'task',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}