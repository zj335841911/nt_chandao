<template src="./product-quantity-gird-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductQuantityGirdGridBase } from './product-quantity-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductQuantityGirdGrid
 * @extends {ProductQuantityGirdGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductQuantityGirdGrid extends ProductQuantityGirdGridBase {}
</script>
