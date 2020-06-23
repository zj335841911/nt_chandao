<template src="./product-exp-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductExpViewBase } from './product-exp-view-portlet-base';
 

/**
 * db_productexpportlet部件
 *
 * @export
 * @class ProductExpView
 * @extends {ProductExpViewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductExpView extends ProductExpViewBase { }
</script>
