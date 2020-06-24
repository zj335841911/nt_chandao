<template src="./product-trends-timeline-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTrendsTimelinePortletBase } from './product-trends-timeline-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class ProductTrendsTimeline
 * @extends {ProductTrendsTimelinePortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductTrendsTimelinePortlet extends ProductTrendsTimelinePortletBase { }
</script>
