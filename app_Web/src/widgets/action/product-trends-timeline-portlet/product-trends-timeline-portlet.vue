<template src="./product-trends-timeline-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTrendsTimelineBase } from './product-trends-timeline-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class ProductTrendsTimeline
 * @extends {ProductTrendsTimelineBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductTrendsTimeline extends ProductTrendsTimelineBase { }
</script>
