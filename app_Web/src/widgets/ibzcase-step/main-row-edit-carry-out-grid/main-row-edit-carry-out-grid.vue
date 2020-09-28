<template>
    <group-step-table class="grid" 
        groupfield="type"
        :data="items"
        :cols="allColumns"
        :isEdit="actualIsOpenEdit"
        @change="gridEditItemChange.apply(_self, arguments)"
        @remove="remove.apply(_self, arguments)"
        @add="add.apply(_self, arguments)">
    </group-step-table>
</template>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_RowEdit_CarryOutGridBase } from './main-row-edit-carry-out-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_RowEdit_CarryOutGrid
 * @extends {Main_RowEdit_CarryOutGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_RowEdit_CarryOutGrid extends Main_RowEdit_CarryOutGridBase { }
</script>
