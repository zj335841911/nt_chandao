<template src="./product-input-table-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductInputTableGridBase } from './product-input-table-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductInputTableGrid
 * @extends {ProductInputTableGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductInputTableGrid extends ProductInputTableGridBase {}
</script>
