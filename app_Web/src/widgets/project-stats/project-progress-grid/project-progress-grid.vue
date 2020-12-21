<template src="./project-progress-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectProgressGridBase } from './project-progress-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectProgressGrid
 * @extends {ProjectProgressGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectProgressGrid extends ProjectProgressGridBase {}
</script>
