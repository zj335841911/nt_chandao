<template src="./product-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductInfoBase } from './product-info-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class ProductInfo
 * @extends {ProductInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductInfo extends ProductInfoBase { }
</script>
