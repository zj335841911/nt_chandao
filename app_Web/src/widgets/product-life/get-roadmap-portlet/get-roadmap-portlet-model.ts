/**
 * GetRoadmap 部件模型
 *
 * @export
 * @class GetRoadmapModel
 */
export default class GetRoadmapModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof GetRoadmapModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'branch',
      },
      {
        name: 'createman',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'productlifename',
      },
      {
        name: 'product',
      },
      {
        name: 'createdate',
      },
      {
        name: 'parent',
      },
      {
        name: 'year',
      },
      {
        name: 'updateman',
      },
      {
        name: 'type',
      },
      {
        name: 'marker',
      },
      {
        name: 'begin',
      },
      {
        name: 'productlife',
        prop: 'productlifeid',
      },
      {
        name: 'end',
      },
    ]
  }


}
