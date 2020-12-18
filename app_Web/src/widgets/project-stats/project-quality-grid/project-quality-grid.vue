<template src="./project-quality-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectQualityGridBase } from './project-quality-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectQualityGrid
 * @extends {ProjectQualityGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectQualityGrid extends ProjectQualityGridBase {}
</script>
