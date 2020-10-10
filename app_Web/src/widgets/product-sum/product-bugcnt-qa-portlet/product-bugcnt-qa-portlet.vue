<template src="./product-bugcnt-qa-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugcnt_QaPortletBase } from './product-bugcnt-qa-portlet-base';
import view_dashboard_sysportlet6_chart from '@widgets/product-sum/product-bugcnt-qa-chart/product-bugcnt-qa-chart.vue';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class ProductBugcnt_QaPortlet
 * @extends {ProductBugcnt_QaPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6_chart, 
         
    }
})
@VueLifeCycleProcessing()
export default class ProductBugcnt_QaPortlet extends ProductBugcnt_QaPortletBase { }
</script>
