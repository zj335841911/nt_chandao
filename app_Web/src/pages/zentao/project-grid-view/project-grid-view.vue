<template src="./project-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectGridViewBase } from './project-grid-view-base';
import view_grid from '@widgets/project/main-grid/main-grid.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectGridView
 * @extends {ProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectGridView extends ProjectGridViewBase { }
</script>
