<template>
    <table class="group-step-table" cellspacing="0" cellpadding="0">
        <thead>
            <tr>
                <th :width="50">编号</th>
                <template v-for="(col, index) of getCols()">
                    <th :key="index" v-if="col.show" :width="(col.width > 0 ? col.width : -1)"> {{col.label}} </th>
                </template>
                <th v-if="isEdit" :width="100">操作</th>
            </tr>
        </thead>
        <draggable :list="data" :disabled="!isEdit" element="tbody" handle=".table-tr-drag" @end="onDraggable">
            <template v-for="(item, index) of getItems(data)">
                <tr :key="index">
                    <td>
                        <div class="table-order"> {{ item.order_num }} </div>
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
                                    <slot :name="col.name" :row="item" :$index="index" :column="col">
                                        <i-input class="table-edit-input" v-model="item[col.name]" @on-change="onEditChange(item, col.name,index)"></i-input>
                                        <el-select class="table-edit-group" v-if="groupfield && i === 0" size="small" clearable v-model="item[groupfield]" @change="onEditChange(item, groupfield,index)">
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
                            <Icon type="md-move" class="table-tr-drag"/>
                            <Icon type="md-close" @click="onRemove(item, index)"/>
                        </div>
                    </td>
                </tr>
            </template>
        </draggable>

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
        if(this.groupfield && this.cols) {
            const col: any = this.cols.find((col: any) => Object.is(col.name, this.groupfield));
            if(col && col.codelistId) {
                let codelist: any = this.$store.getters.getCodeList(col.codelistId);
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
        if(!datas || datas.length == 0) {
            return [];
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
            if(this.groupfield && data[this.groupfield] && Object.is(data[this.groupfield].toLowerCase(), 'group')) {
                groupNum = order;
                data.order_num = order++;
            } else if(this.groupfield && data[this.groupfield] && Object.is(data[this.groupfield].toLowerCase(), 'item') && groupNum > 0) {
                data.child_order_num = groupNum + '.' + num++;
            } else {
                groupNum = 0;
                num = 1;
                data.order_num = order++;
            }
        });
        return datas;
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

    /**
     * 顺序拖动
     * 
     * @returns {*}
     * @memberof GroupStepTable
     */
    public onDraggable($event: any) {
        this.$forceUpdate();
    }
}
</script>

<style lang="less">
@import './group-step-table.less';
</style>
