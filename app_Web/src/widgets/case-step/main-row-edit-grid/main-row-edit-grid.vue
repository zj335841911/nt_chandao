<template src="./main-row-edit-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_RowEditBase } from './main-row-edit-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_RowEdit
 * @extends {Main_RowEditBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_RowEdit extends Main_RowEditBase { }
</script>
