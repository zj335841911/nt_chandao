/**
 * Meditviewpanel 部件模型
 *
 * @export
 * @class MeditviewpanelModel
 */
export class MeditviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MeditviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'account',
      },
      {
        name: 'left',
      },
      {
        name: 'consumed',
      },
      {
        name: 'taskestimate',
        prop: 'id',
      },
      {
        name: 'date',
      },
      {
        name: 'work',
      },
      {
        name: 'task',
      },
      {
        name: 'dates',
      },
      {
        name: 'task',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default MeditviewpanelModel;