/**
 * MobNew 部件模型
 *
 * @export
 * @class MobNewModel
 */
export class MobNewModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobNewModel
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
                name: 'srforikey',
            },
            {
                name: 'srfkey',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'name',
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
                name: 'name',
                prop: 'name',
                dataType: 'TEXT',
            },
            {
                name: 'pri',
                prop: 'pri',
                dataType: 'INT',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
            },
            {
                name: 'begin',
                prop: 'begin',
                dataType: 'NSCODELIST',
            },
            {
                name: 'end',
                prop: 'end',
                dataType: 'NSCODELIST',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'TEXT',
            },
            {
                name: 'bug',
                prop: 'bug',
                dataType: 'TEXT',
            },
            {
                name: 'idvalue',
                prop: 'idvalue',
                dataType: 'BIGINT',
            },
            {
                name: 'task',
                prop: 'task',
                dataType: 'TEXT',
            },
            {
                name: 'config_type',
                prop: 'config_type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'cycle',
                prop: 'cycle',
                dataType: 'INT',
            },
            {
                name: 'story',
                prop: 'story',
                dataType: 'TEXT',
            },
            {
                name: 'private',
                prop: 'ibizprivate',
                dataType: 'SMCODELIST',
            },
            {
                name: 'desc',
                prop: 'desc',
                dataType: 'LONGTEXT',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'formitem7',
            },
            {
                name: 'formitem',
                prop: 'config',
                dataType: 'TEXT',
            },
            {
                name: 'assignedtopk',
                prop: 'assignedtopk',
                dataType: 'TEXT',
            },
            {
                name: 'formitem2',
            },
            {
                name: 'formitem1',
            },
            {
                name: 'account',
                prop: 'account',
                dataType: 'TEXT',
            },
            {
                name: 'assignedby',
                prop: 'assignedby',
                dataType: 'TEXT',
            },
            {
                name: 'assigneddate',
                prop: 'assigneddate',
                dataType: 'DATE',
            },
            {
                name: 'noticeusers',
                prop: 'noticeusers',
                dataType: 'TEXT',
            },
            {
                name: 'formitem3',
            },
            {
                name: 'formitem4',
            },
            {
                name: 'formitem5',
            },
            {
                name: 'formitem6',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'todo',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobNewModel;