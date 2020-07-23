<template src="./project-main-my-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainMyGridViewBase } from './project-main-my-grid-view-base';
import view_grid from '@widgets/project/main-grid/main-grid.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectMainMyGridView
 * @extends {ProjectMainMyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainMyGridView extends ProjectMainMyGridViewBase { }
</script>
