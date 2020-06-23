<template src="./project-trends-timeline-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTrendsTimelineBase } from './project-trends-timeline-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class ProjectTrendsTimeline
 * @extends {ProjectTrendsTimelineBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProjectTrendsTimeline extends ProjectTrendsTimelineBase { }
</script>
