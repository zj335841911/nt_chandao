<template src="./get-roadmap-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapBase } from './get-roadmap-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class GetRoadmap
 * @extends {GetRoadmapBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class GetRoadmap extends GetRoadmapBase { }
</script>
