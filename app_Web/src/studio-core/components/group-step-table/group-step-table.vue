<template>
    <table class="group-step-table" cellspacing="0" cellpadding="0">
        <thead>
            <tr>
                <th :width="50">编号</th>
                <template v-for="(col, index) of cols">
                    <th :key="index"> {{col.label}} </th>
                </template>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, index) of getItems(data)">
                <tr :key="index">
                    <td>
                        <div class="table-order">{{ item.order_num }}</div>
                    </td>
                    <template v-for="(col, i) of cols">
                        <td :key="i">
                            <div class="table-item">
                                <div  class="table-order" v-if="item.hasOwnProperty('child_order_num') && i === 0"> {{ item.child_order_num }} </div>
                                <div>
                                    <slot :item="{data: item, index: index, col: col}">
                                        {{ item[col.name] }}
                                    </slot>
                                </div>
                            </div>
                        </td>
                    </template>
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
     * @type *
     * @memberof GroupStepTable
     */
    @Prop() cols: any;

    /**
     * 数据集合
     * 
     * @type *
     * @memberof GroupStepTable
     */
    @Prop() data: any;

    /**
     * 是否启用编辑
     * 
     * @type *
     * @memberof GroupStepTable
     */
    @Prop() isEdit?: boolean;

    /**
     * 获取数据集合
     * 
     * @type *
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
            if(Object.is(data.type.toLowerCase(), 'group')) {
                groupNum = order;
                data.order_num = order++;
            } else if(Object.is(data.type.toLowerCase(), 'item') && groupNum > 0) {
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
        }
        .table-order {
            height: 30px;
            width: 49px;
            text-align: center;
        }
    }
}
</style>
