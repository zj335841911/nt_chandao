<template src="./product-complete-table-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductCompleteTableGridBase } from './product-complete-table-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductCompleteTableGrid
 * @extends {ProductCompleteTableGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductCompleteTableGrid extends ProductCompleteTableGridBase {}
</script>
