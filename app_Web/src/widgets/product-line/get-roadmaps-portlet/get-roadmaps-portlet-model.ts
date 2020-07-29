/**
 * GetRoadmaps 部件模型
 *
 * @export
 * @class GetRoadmapsModel
 */
export default class GetRoadmapsModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof GetRoadmapsModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'productlinename',
      },
      {
        name: 'productline',
        prop: 'productlineid',
      },
      {
        name: 'updateman',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'createdate',
      },
      {
        name: 'createman',
      },
    ]
  }


}
