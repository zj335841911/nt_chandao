/**
 * RelatedMembers 部件模型
 *
 * @export
 * @class RelatedMembersModel
 */
export default class RelatedMembersModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof RelatedMembersModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'ibzprojectmember',
        prop: 'id',
      },
      {
        name: 'name',
      },
      {
        name: 'rd',
      },
      {
        name: 'po',
      },
      {
        name: 'pm',
      },
      {
        name: 'qd',
      },
      {
        name: 'fristmember',
      },
      {
        name: 'secondmember',
      },
      {
        name: 'thirdmember',
      },
      {
        name: 'fourthmember',
      },
      {
        name: 'fifthmember',
      },
      {
        name: 'sixthmember',
      },
    ]
  }


}