<template src="./un-closed-product-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UnClosedProductBase } from './un-closed-product-portlet-base';
 

/**
 * db_productunclosedportlet部件
 *
 * @export
 * @class UnClosedProduct
 * @extends {UnClosedProductBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class UnClosedProduct extends UnClosedProductBase { }
</script>
