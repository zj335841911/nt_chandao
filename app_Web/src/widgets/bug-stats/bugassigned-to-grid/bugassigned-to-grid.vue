<template>
    <div :class="{ 'grid': true, 'show-paging-bar': isEnablePagingBar, 'hidden-paging-bar': !isEnablePagingBar }">
        <i-form>
        <el-table v-if="isDisplay === true"
            :border="isDragendCol"
            :highlight-current-row ="isSingleSelect"
            :row-class-name="getRowClassName.bind(_self)"
            :cell-class-name="getCellClassName.bind(_self)"
            :span-method="rowSpanMethod"
            size="mini"
            stripe
            :height="tableHeight"
            @row-click="rowClick($event)"  
            @select-all="selectAll($event)"  
            @select="select($event)"  
            @row-class-name="onRowClassName($event)"  
            @row-dblclick="rowDBLClick($event)"  
            ref='multipleTable' :data="itemsRenderList" :show-header="!isHideHeader">
                <template slot="empty">
                    无数据 
                    <span class="quick-toolbar">
                    </span>
                </template>
                <template v-if="!isSingleSelect">
                    <el-table-column align="center" type='selection' :width="checkboxColWidth"></el-table-column>
                </template>
                <template v-if="getColumnState('assignedto')">
                    <el-table-column show-overflow-tooltip :prop="'assignedto'" :label="$t('entities.bugstats.bugassignedto_grid.columns.assignedto')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.assignedto')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <template >
                <codelist :value="row.assignedto" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," ></codelist>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('productname')">
                    <el-table-column show-overflow-tooltip :prop="'productname'" :label="$t('entities.bugstats.bugassignedto_grid.columns.productname')" :min-width="150"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.productname')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <app-column-link deKeyField='product' :context="JSON.parse(JSON.stringify(context))" :viewparams="JSON.parse(JSON.stringify(viewparams))" :data="row" :linkview="{viewname: 'product-main-tab-exp-view', height: 0,width: 0,title: $t('entities.product.views.maintabexpview.title'),placement: '', isRedirectView: false,deResParameters: [
                ]
                ,parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'maintabexpview', parameterName: 'maintabexpview' }
                ]}" valueitem="product">
                                <span>{{row.productname}}</span>
                            </app-column-link >
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('bugcnt')">
                    <el-table-column show-overflow-tooltip :prop="'bugcnt'" :label="$t('entities.bugstats.bugassignedto_grid.columns.bugcnt')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.bugcnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.bugcnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('bugtotal')">
                    <el-table-column show-overflow-tooltip :prop="'bugtotal'" :label="$t('entities.bugstats.bugassignedto_grid.columns.bugtotal')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.bugstats.bugassignedto_grid.columns.bugtotal')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.bugtotal}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="adaptiveState">
                    <el-table-column></el-table-column>
                </template>
        </el-table>
    </i-form>
    </div>
</template>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing, Watch } from '@/studio-core';
import { BugassignedToGridBase } from './bugassigned-to-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BugassignedToGrid
 * @extends {BugassignedToGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BugassignedToGrid extends BugassignedToGridBase { 
    public infoList:Array<any> = [];
    public itemsRenderList:Array<any> = [];

    @Watch("items")
    public itemsWatch(newVal:any, oldVal:any) {
        if (newVal) {
            console.log("在这里~~~~",newVal)
            this.itemsRenderList.push(...newVal)
            this.itemsRenderList.sort((prev:any, next:any) => {
                if (prev['assignedto'] !== next['assignedto']) {
                    return prev['assignedto'].localeCompare(next['assignedto'])
                }
            })
            let tempArray:Array<any> = [];
            this.itemsRenderList.forEach((item:any) => {
                let firstIndex:number = this.itemsRenderList.findIndex((curr:any) => {return curr.assignedto === item.assignedto;});
                if (tempArray.findIndex((curr:any) => {return curr.firstIndex === firstIndex}) === -1) {
                    tempArray.push({length:this.itemsRenderList.filter((curr:any) => {return curr.assignedto === item.assignedto}).length,firstIndex:firstIndex})
                }
            })
            this.infoList = [...tempArray];
        }
    }
    public rowSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
            let index = this.infoList.findIndex((item:any) => {
                return item.firstIndex === rowIndex;
            })
            if (index > -1) {
                return {
                    rowspan: this.infoList[index].length,
                    colspan: 1
                }
            } else {
                return {
                    rowspan: 0,
                    colspan: 0
                }
            }
        }
    }
}
</script>
