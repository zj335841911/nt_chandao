<template src="./get-roadmap-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapPortletBase } from './get-roadmap-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class GetRoadmap
 * @extends {GetRoadmapPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class GetRoadmapPortlet extends GetRoadmapPortletBase { }
</script>
