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
                                        {{ (col.render ? col.render(item[col.name]) : item[col.name]) }}
                                    </slot>
                                </div>
                                <div v-if="isEdit" class="table-td-edit">
                                    <slot :item="{row: item, index: index, column: col}">
                                        <i-input class="table-edit-input" v-model="item[col.name]" @on-change="onEditChange(item, col.name,index)"></i-input>
                                        <el-select class="table-edit-group" v-if="i === 0" size="small" clearable v-model="item[groupfield]" @change="onEditChange(item, groupfield,index)">
                                            <template v-for="(option, n) of groupItems">
                                                <el-option :key="n" :label="option.label" :value="option.value"></el-option>
                                            </template>
                                        </el-select>
                                    </slot>
                                </div>
                            </div>
                        </td>
                    </template>
                    <td v-if="isEdit">
                        <div class="table-action">
                            <Icon type="md-add" @click="onAdd(item, index)"/>
                            <Icon type="md-move" />
                            <Icon type="md-close" @click="onRemove(item, index)"/>
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
     * 获取分组项集合
     * 
     * @type {string}
     * @memberof GroupStepTable
     */
    get groupItems() {
        let items: any[] = [];
        if(this.cols) {
            const col: any = this.cols.find((col: any) => Object.is(col.name, this.groupfield));
            if(col.codelistId) {
                let codelist: any = this.$store.getters.getCodeList('Casestep__type');
                if(codelist) {
                    return codelist.items;
                }
            }
        }
        return items;
    }

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
        let groupNum: number = 0; //分组编号
        let num: number = 1;
        let order: number = 1; // 编号
        datas.forEach((data: any) => {
            if(data.hasOwnProperty('order_num')) {
                delete data.order_num;
            }
            if(data.hasOwnProperty('child_order_num')) {
                delete data.child_order_num;
            }
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

    /**
     * 添加
     * 
     * @returns {*}
     * @memberof GroupStepTable
     */
    public onAdd(row: any, index: number) {
        this.$emit('add', { row: row, index: index }, (data: any) => {
            if(Object.is(row[this.groupfield].toLowerCase(), 'group') || Object.is(row[this.groupfield].toLowerCase(), 'item')) {
                data[this.groupfield] = 'item';
            } else {
                data[this.groupfield] = 'step';
            }
            this.data.splice(index + 1, 0, data);
        });
    }

    /**
     * 删除
     * 
     * @returns {*}
     * @memberof GroupStepTable
     */
    public onRemove(row: any, index: number) {
        this.$emit('remove', [row]);
    }
    /**
     * 编辑数据变化
     * 
     * @returns {*}
     * @memberof GroupStepTable
     */
    public onEditChange(row: any, field: string, index: number) {
        this.$emit('change', row, field, row[field], index);
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
