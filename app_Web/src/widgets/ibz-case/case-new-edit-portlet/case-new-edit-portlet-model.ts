/**
 * CaseNewEdit 部件模型
 *
 * @export
 * @class CaseNewEditModel
 */
export default class CaseNewEditModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof CaseNewEditModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'order',
      },
      {
        name: 'howrun',
      },
      {
        name: 'scriptedby',
      },
      {
        name: 'path',
      },
      {
        name: 'openeddate',
      },
      {
        name: 'lastediteddate',
      },
      {
        name: 'scripteddate',
      },
      {
        name: 'comment',
      },
      {
        name: 'auto',
      },
      {
        name: 'title',
      },
      {
        name: 'deleted',
      },
      {
        name: 'scriptlocation',
      },
      {
        name: 'scriptstatus',
      },
      {
        name: 'keywords',
      },
      {
        name: 'ibzcase',
        prop: 'id',
      },
      {
        name: 'precondition',
      },
      {
        name: 'pri',
      },
      {
        name: 'type',
      },
      {
        name: 'status',
      },
      {
        name: 'stage',
      },
      {
        name: 'openedby',
      },
      {
        name: 'lasteditedby',
      },
      {
        name: 'lib',
      },
      {
        name: 'module',
      },
      {
        name: 'modulename',
      },
      {
        name: 'libname',
      },
      {
        name: 'version',
      },
    ]
  }


}
