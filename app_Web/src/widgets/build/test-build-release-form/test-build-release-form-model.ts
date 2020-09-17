/**
 * TestBuildRelease 部件模型
 *
 * @export
 * @class TestBuildReleaseModel
 */
export default class TestBuildReleaseModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof TestBuildReleaseModel
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
        name: 'releasetype',
        prop: 'releasetype',
        dataType: 'SSCODELIST',
      },
      {
        name: 'backgroundid',
        prop: 'backgroundid',
        dataType: 'SSCODELIST',
      },
      {
        name: 'sqlid',
        prop: 'sqlid',
        dataType: 'SSCODELIST',
      },
      {
        name: 'frontapplication',
        prop: 'frontapplication',
        dataType: 'SSCODELIST',
      },
      {
        name: 'rebuild',
        prop: 'rebuild',
        dataType: 'NSCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'build',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}