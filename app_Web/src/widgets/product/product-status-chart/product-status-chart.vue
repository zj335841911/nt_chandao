<template src="./product-status-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatusBase } from './product-status-chart-base';
 

/**
 * db_productstatusportlet_chart部件
 *
 * @export
 * @class ProductStatus
 * @extends {ProductStatusBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductStatus extends ProductStatusBase { }
</script>
