<template src="./main-row-edit-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_RowEditGridBase } from './main-row-edit-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_RowEdit
 * @extends {Main_RowEditGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_RowEditGrid extends Main_RowEditGridBase { }
</script>
