<template src="./pivot-table-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PivotTableBase } from './pivot-table-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PivotTable
 * @extends {PivotTableBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class PivotTable extends PivotTableBase { }
</script>
