<template>
    <table class="group-step-table" cellspacing="0" cellpadding="0">
        <thead>
            <tr>
                <th :width="50">编号</th>
                <template v-for="(col, index) of getCols()">
                    <th :key="index" v-if="col.show"> {{col.label}} </th>
                </template>
                <th v-if="isEdit" :width="100">操作</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, index) of getItems(data)">
                <tr :key="index">
                    <td>
                        <div class="table-order">{{ item.order_num }}</div>
                    </td>
                    <template v-for="(col, i) of getCols()">
                        <td :key="i" v-if="col.show">
                            <div class="table-item">
                                <div  class="table-order" v-if="item.hasOwnProperty('child_order_num') && i === 0"> {{ item.child_order_num }} </div>
                                <div v-if="!isEdit" class="table-td">
                                    <slot :item="{row: item, index: index, column: col}">
                                        {{ item[col.name] }}
                                    </slot>
                                </div>
                                <div v-if="isEdit" class="table-td-edit">
                                    <slot :item="{row: item, index: index, column: col}">
                                        <i-input class="table-edit-input" v-model="item[col.name]"></i-input>
                                        <el-select class="table-edit-group" v-if="i === 0" size="small" clearable v-model="item[groupfield]">
                                            
                                        </el-select>
                                    </slot>
                                </div>
                            </div>
                        </td>
                    </template>
                    <td v-if="isEdit">
                        <div class="table-action">
                            <Icon type="md-add" />
                            <Icon type="md-move" />
                            <Icon type="md-close" />
                        </div>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class GroupStepTable extends Vue {

    /**
     * 列集合
     * 
     * @type {*}
     * @memberof GroupStepTable
     */
    @Prop() cols: any;

    /**
     * 数据集合
     * 
     * @type {*}
     * @memberof GroupStepTable
     */
    @Prop() data: any;

    /**
     * 是否启用编辑
     * 
     * @type {boolean}
     * @memberof GroupStepTable
     */
    @Prop() isEdit?: boolean;

    /**
     * 分组属性
     * 
     * @type {string}
     * @memberof GroupStepTable
     */
    @Prop() groupfield!: string;

    /**
     * 获取数据集合
     * 
     * @returns {*}
     * @memberof GroupStepTable
     */
    public getItems(datas: any[]) {
        const items: any[] = [];
        if(!datas || datas.length == 0) {
            return items;
        }
        const source: any[] = JSON.parse(JSON.stringify(datas));
        let groupNum: number = 0; //分组编号
        let num: number = 1;
        let order: number = 1; // 编号
        source.forEach((data: any) => {
            if(Object.is(data[this.groupfield].toLowerCase(), 'group')) {
                groupNum = order;
                data.order_num = order++;
            } else if(Object.is(data[this.groupfield].toLowerCase(), 'item') && groupNum > 0) {
                data.child_order_num = groupNum + '.' + num++;
            } else {
                groupNum = 0;
                num = 1;
                data.order_num = order++;
            }
            items.push(data);
        });
        return items;
    }

    /**
     * 获取数据集合
     * 
     * @returns {*}
     * @memberof GroupStepTable
     */
    public getCols() {
        let items: any[] = [];
        this.cols.map((col: any) => {
            if(col.show) {
                items.push(col);
            }
        });
        return items;
    }
}
</script>

<style lang="less">
.group-step-table {
    width: 100%;
    margin-bottom: 10px;
    tr {
        th, td {
            line-height: 30px;
            border: 1px solid #999;
            border-right-width: 0;
        }
        th:nth-last-child(1), td:nth-last-child(1) {
            border-right-width: 1px;
        }
    }
    tbody {
        tr {
            th, td {
                border-top-width: 0;
            }
        }
        .table-item {
            display: flex;
            .table-td {
                padding: 0 4px;
            }
            .table-td-edit {
                flex-grow: 1;
                display: flex;
                .table-edit-input {
                    flex-grow: 1;
                    .ivu-input {
                        border-radius: 0;
                    }
                }
                .table-edit-group {
                    width: 100px;
                    flex-shrink: 0;
                    .el-input__inner {
                        border-radius: 0;
                    }
                }
            }
        }
        .table-order {
            height: 30px;
            width: 49px;
            text-align: center;
            flex-shrink: 0;
        }
        .table-action {
            text-align: center;
            font-size: 20px;
            .ivu-icon {
                margin-left: 5px;
                cursor: pointer;
            }
        }
    }
}
</style>
