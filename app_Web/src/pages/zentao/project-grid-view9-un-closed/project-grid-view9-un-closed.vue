<template src="./project-grid-view9-un-closed.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectGridView9_UnClosedBase } from './project-grid-view9-un-closed-base';
import view_grid from '@widgets/project/main2-grid/main2-grid.vue';

/**
 * 项目表格视图视图
 *
 * @export
 * @class ProjectGridView9_UnClosed
 * @extends {ProjectGridView9_UnClosedBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectGridView9_UnClosed extends ProjectGridView9_UnClosedBase { }
</script>
