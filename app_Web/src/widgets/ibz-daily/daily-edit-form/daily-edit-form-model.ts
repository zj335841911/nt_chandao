/**
 * DailyEdit 部件模型
 *
 * @export
 * @class DailyEditModel
 */
export default class DailyEditModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DailyEditModel
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
        prop: 'ibzdailyid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzdailyname',
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
        name: 'ibz_dailyname',
        prop: 'ibzdailyname',
        dataType: 'TEXT',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'worktoday',
        prop: 'worktoday',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'todaytask',
        prop: 'todaytask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'planstomorrow',
        prop: 'planstomorrow',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'tomorrowplanstask',
        prop: 'tomorrowplanstask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'files',
        prop: 'files',
        dataType: 'TEXT',
      },
      {
        name: 'mailto',
        prop: 'mailto',
        dataType: 'SMCODELIST',
      },
      {
        name: 'reportto',
        prop: 'reportto',
        dataType: 'SSCODELIST',
      },
      {
        name: 'ibz_dailyid',
        prop: 'ibzdailyid',
        dataType: 'ACID',
      },
      {
        name: 'account',
        prop: 'account',
        dataType: 'SSCODELIST',
      },
      {
        name: 'issubmit',
        prop: 'issubmit',
        dataType: 'SSCODELIST',
      },
      {
        name: 'ibzdaily',
        prop: 'ibzdailyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}