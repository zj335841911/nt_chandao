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
                name: 'n_modulename_like',
                prop: 'n_modulename_like', 
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'n_id_eq',
                prop: 'n_id_eq', 
                dataType: 'ACID',
            },
            {
                name: 'n_buildproject_eq',
                prop: 'n_buildproject_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_openedby_eq',
                prop: 'n_openedby_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'bug',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobDefModel;