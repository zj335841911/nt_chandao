<template src="./product-status-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatusPortletBase } from './product-status-portlet-base';
 

/**
 * dashboard_sysportlet7部件
 *
 * @export
 * @class ProductStatusPortlet
 * @extends {ProductStatusPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductStatusPortlet extends ProductStatusPortletBase { }
</script>
