<template src="./project-status-bar-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatusBarBase } from './project-status-bar-chart-base';
 

/**
 * db_projectstatusportlet_chart部件
 *
 * @export
 * @class ProjectStatusBar
 * @extends {ProjectStatusBarBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatusBar extends ProjectStatusBarBase { }
</script>
