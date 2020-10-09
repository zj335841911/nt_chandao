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
                <template v-if="getColumnState('name')">
                    <el-table-column show-overflow-tooltip :prop="'name'" :label="$t('entities.productsum.main_grid.columns.name')" :min-width="180"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.name')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.name}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('po')">
                    <el-table-column show-overflow-tooltip :prop="'po'" :label="$t('entities.productsum.main_grid.columns.po')" :width="120"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.po')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <template >
                <codelist :value="row.po" tag='UserRealName' codelistType='DYNAMIC' renderMode="STR" valueSeparator="," textSeparator="," ></codelist>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('plan')">
                    <el-table-column show-overflow-tooltip :prop="'plan'" :label="$t('entities.productsum.main_grid.columns.plan')" :width="200"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.plan')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <template >
                <codelist :value="row.plan" tag='PlanCodeList' codelistType='DYNAMIC' ></codelist>
                            </template>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('begin')">
                    <el-table-column show-overflow-tooltip :prop="'begin'" :label="$t('entities.productsum.main_grid.columns.begin')" :width="120"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.begin')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.begin}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('end')">
                    <el-table-column show-overflow-tooltip :prop="'end'" :label="$t('entities.productsum.main_grid.columns.end')" :width="120"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.end')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.end}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('waitstorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'waitstorycnt'" :label="$t('entities.productsum.main_grid.columns.waitstorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.waitstorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.waitstorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('activestorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'activestorycnt'" :label="$t('entities.productsum.main_grid.columns.activestorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.activestorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.activestorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('changedstorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'changedstorycnt'" :label="$t('entities.productsum.main_grid.columns.changedstorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.changedstorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.changedstorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('closedstorycnt')">
                    <el-table-column show-overflow-tooltip :prop="'closedstorycnt'" :label="$t('entities.productsum.main_grid.columns.closedstorycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.closedstorycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.closedstorycnt}}</span>
                        </template>
                    </el-table-column>
                </template>
                <template v-if="getColumnState('storycnt')">
                    <el-table-column show-overflow-tooltip :prop="'storycnt'" :label="$t('entities.productsum.main_grid.columns.storycnt')" :width="100"  :align="'center'">
                        <template slot="header">
                        <span class="column-header ">
                            {{$t('entities.productsum.main_grid.columns.storycnt')}}
                        </span>
                        </template>
                        <template v-slot="{row}">
                            <span>{{row.storycnt}}</span>
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
import { MainGridBase } from './main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainGrid
 * @extends {MainGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainGrid extends MainGridBase {

    public infoList:Array<any> = [];
    public itemsRenderList:Array<any> = [];

    @Watch("items")
    public itemsWatch(newVal:any, oldVal:any) {
        if (newVal) {
            this.itemsRenderList.push(...newVal)
            this.itemsRenderList.sort((prev:any, next:any) => {
                if (prev['name'] !== next['name']) {
                    return prev['name'].localeCompare(next['name'])
                }
            })
            let tempArray:Array<any> = [];
            this.itemsRenderList.forEach((item:any) => {
                let firstIndex:number = this.itemsRenderList.findIndex((curr:any) => {return curr.name === item.name;});
                if (tempArray.findIndex((curr:any) => {return curr.firstIndex === firstIndex}) === -1) {
                    tempArray.push({length:this.itemsRenderList.filter((curr:any) => {return curr.name === item.name}).length,firstIndex:firstIndex})
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
