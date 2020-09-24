/**
 * MobDef 部件模型
 *
 * @export
 * @class MobDefModel
 */
export class MobDefModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobDefModel
    */
    public getDataItems(): any[] {
        return [
            // 工作流备注字段
            {
                name: 'srfwfmemo',
                prop: 'srfwfmemo',
                dataType: 'TEXT',
            },
            {
                name: 'n_title_like',
                prop: 'n_title_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_isexpired_eq',
                prop: 'n_isexpired_eq', 
                dataType: 'YESNO',
            },
            {
                name: 'n_future_eq',
                prop: 'n_future_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_delta_eq',
                prop: 'n_delta_eq', 
                dataType: 'SSCODELIST',
            },
        ];
    }

}
// 默认导出
export default MobDefModel;