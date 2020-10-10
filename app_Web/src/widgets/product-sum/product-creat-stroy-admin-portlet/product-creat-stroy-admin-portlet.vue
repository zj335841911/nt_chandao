<template src="./product-creat-stroy-admin-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductCreatStroy_adminPortletBase } from './product-creat-stroy-admin-portlet-base';
import view_dashboard_sysportlet3_chart from '@widgets/product-sum/product-create-story-chart/product-create-story-chart.vue';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class ProductCreatStroy_adminPortlet
 * @extends {ProductCreatStroy_adminPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet3_chart, 
         
    }
})
@VueLifeCycleProcessing()
export default class ProductCreatStroy_adminPortlet extends ProductCreatStroy_adminPortletBase { }
</script>
