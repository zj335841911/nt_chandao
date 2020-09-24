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
                name: 'n_name_like',
                prop: 'n_name_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_releasetype_eq',
                prop: 'n_releasetype_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_sqlid_eq',
                prop: 'n_sqlid_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_project_eq',
                prop: 'n_project_eq', 
                dataType: 'PICKUP',
            },
        ];
    }

}
// 默认导出
export default MobDefModel;