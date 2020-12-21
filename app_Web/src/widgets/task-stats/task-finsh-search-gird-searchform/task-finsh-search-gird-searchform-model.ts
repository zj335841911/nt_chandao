/**
 * TaskFinshSearchGird 部件模型
 *
 * @export
 * @class TaskFinshSearchGirdModel
 */
export default class TaskFinshSearchGirdModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof TaskFinshSearchGirdModel
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
        name: 'n_dept_eq',
        prop: 'dept',
        dataType: 'SSCODELIST',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'DATE',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'DATE',
      },
    ]
  }

}